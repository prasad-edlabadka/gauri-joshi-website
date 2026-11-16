import { useEffect, useRef } from 'react';

/**
 * Tracks section views and dwell time, dispatching events to Google Analytics (gtag/dataLayer).
 * Also keeps the URL hash synchronized without page reloading.
 */
export function useSectionTracking(sectionIds = []) {
  const activeSectionRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const sectionIdsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = sectionIdsKey ? sectionIdsKey.split(',') : [];
    if (ids.length === 0) return;

    const sendGaEvent = (eventName, params) => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      } else if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, ...params });
      }
    };

    const recordDwellTime = (sectionId) => {
      if (!sectionId) return;
      const durationSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);

      // Record meaningful visits (at least 2 seconds)
      if (durationSeconds >= 2) {
        sendGaEvent('section_dwell_time', {
          section_name: sectionId,
          dwell_seconds: durationSeconds,
          page_location: window.location.href,
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newSectionId = entry.target.id;

            if (activeSectionRef.current !== newSectionId) {
              recordDwellTime(activeSectionRef.current);
              activeSectionRef.current = newSectionId;
              startTimeRef.current = Date.now();

              if (window.history.replaceState) {
                window.history.replaceState(null, '', `#${newSectionId}`);
              }

              sendGaEvent('section_view', {
                section_name: newSectionId,
                page_path: `/#${newSectionId}`,
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.45,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleBeforeUnload = () => {
      recordDwellTime(activeSectionRef.current);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      recordDwellTime(activeSectionRef.current);
      observer.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [sectionIdsKey]);
}
