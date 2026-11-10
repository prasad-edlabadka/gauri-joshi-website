import React, { useState, useEffect } from 'react';
import { Instagram, Play, ExternalLink, Film, Sparkles } from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';

const FALLBACK_SCREENSHOTS = [
  { src: '/images/reels/reel-career-joy.jpg', pos: 'center top' },
  { src: '/images/reels/reel-relationships-mind.jpg', pos: 'center top' },
  { src: '/images/reels/reel-i-am-fine.jpg', pos: 'center top' },
  { src: '/images/reels/reel-quiet-episode2.jpg', pos: 'center top' },
];

/**
 * Extracts an Instagram shortcode and converts a reel/post URL into
 * Instagram's official embed URL (`https://www.instagram.com/reel/<id>/embed/`).
 */
function getInstagramEmbedUrl(rawUrl) {
  if (!rawUrl) return null;
  const match = rawUrl.match(/instagram\.com\/(?:[^/]+\/)?(reel|reels|p|tv)\/([A-Za-z0-9_-]+)/i);
  if (!match) return null;
  const kind = match[1].toLowerCase() === 'p' ? 'p' : 'reel';
  const code = match[2];
  return `https://www.instagram.com/${kind}/${code}/embed/`;
}

export function InstagramReelsSection({ instagramConfig, copy, lang }) {
  const [beholdPosts, setBeholdPosts] = useState([]);
  const [beholdLoading, setBeholdLoading] = useState(false);
  const [playingReels, setPlayingReels] = useState({});

  const feedId = instagramConfig?.beholdFeedId?.trim();
  const configuredReels = (instagramConfig?.featuredReels || []).filter((item) =>
    Boolean(getInstagramEmbedUrl(item?.url))
  );

  useEffect(() => {
    if (!feedId) return;
    let cancelled = false;
    setBeholdLoading(true);
    fetch(`https://feeds.behold.so/${feedId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Feed unavailable'))))
      .then((data) => {
        if (cancelled) return;
        const posts = Array.isArray(data) ? data : data?.posts || [];
        // Prefer Reels / Videos, fall back to latest posts
        const videos = posts.filter(
          (p) => p.mediaType === 'VIDEO' || p.isReel || (p.permalink && p.permalink.includes('/reel/'))
        );
        const selected = (videos.length > 0 ? videos : posts).slice(0, 4);
        setBeholdPosts(selected);
      })
      .catch(() => {
        if (!cancelled) setBeholdPosts([]);
      })
      .finally(() => {
        if (!cancelled) setBeholdLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [feedId]);

  const showBeholdLive = beholdPosts.length > 0;
  const showDirectEmbeds = !showBeholdLive && configuredReels.length > 0;

  return (
    <section id="reels" className="section reels-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow ig-eyebrow">
            <Instagram size={14} />
            <span>{copy.eyebrow}</span>
          </span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>

        {/* Instagram Profile Header Card */}
        <div className="ig-profile-banner">
          <div className="ig-profile-left">
            <div className="ig-avatar-ring">
              <div className="ig-avatar-inner">
                <ClinicLogo size={42} />
              </div>
            </div>
            <div>
              <div className="ig-handle-row">
                <strong>@{instagramConfig.handle}</strong>
                <span className="ig-verified-chip">
                  <Sparkles size={11} />
                  {lang === 'mr' ? 'अधिकृत चॅनेल' : 'Official Clinic'}
                </span>
              </div>
              <p className="ig-profile-bio">{copy.profileBio}</p>
            </div>
          </div>

          <a
            href={instagramConfig.reelsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn ig-follow-btn"
          >
            <Instagram size={17} />
            <span>{copy.followBtn}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Mode 1: Live Auto-Synced Reels from Behold.so */}
        {showBeholdLive && (
          <div className="reels-grid">
            {beholdPosts.map((post, idx) => {
              const fallback = FALLBACK_SCREENSHOTS[idx % FALLBACK_SCREENSHOTS.length];
              const thumbUrl = post.thumbnailUrl || post.mediaUrl || fallback.src;
              const captionText = post.prunedCaption || post.caption || '';
              return (
                <a
                  key={post.id}
                  href={post.permalink || instagramConfig.reelsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-live-card"
                >
                  <div className="reel-media-wrap">
                    <img
                      src={thumbUrl}
                      alt={captionText.slice(0, 80) || 'Clinic Reel'}
                      loading="lazy"
                      style={{
                        objectPosition: post.thumbnailUrl || post.mediaUrl ? 'center' : fallback.pos,
                      }}
                    />
                    <div className="reel-overlay-scrim" />
                    <span className="reel-top-pill">
                      <Film size={13} />
                      Reel
                    </span>
                    <div className="reel-play-circle" aria-hidden="true">
                      <Play size={24} fill="currentColor" />
                    </div>
                    <div className="reel-bottom-caption">
                      <p>{captionText.slice(0, 110)}{captionText.length > 110 ? '...' : ''}</p>
                      <span className="reel-watch-label">
                        {copy.watchOnIgBtn} <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Mode 2: Official Embedded Instagram Reels with Screenshot Placeholder Until Clicked */}
        {showDirectEmbeds && (
          <div className="reels-embed-grid">
            {configuredReels.map((item, idx) => {
              const embedUrl = getInstagramEmbedUrl(item.url);
              const isPlaying = Boolean(playingReels[item.url]);
              const fallback = FALLBACK_SCREENSHOTS[idx % FALLBACK_SCREENSHOTS.length];
              const posterSrc = item.thumbnail || fallback.src;

              if (isPlaying) {
                return (
                  <div key={item.url} className="reel-iframe-card">
                    <iframe
                      src={embedUrl}
                      title={item.title || 'Instagram Reel by Dr. Gauri Joshi'}
                      className="reel-iframe"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                );
              }

              return (
                <button
                  key={item.url}
                  type="button"
                  className="reel-showcase-card reel-poster-btn"
                  onClick={() =>
                    setPlayingReels((prev) => ({
                      ...prev,
                      [item.url]: true,
                    }))
                  }
                  aria-label={`Play ${item.title || 'Instagram Reel'}`}
                >
                  <div className="reel-thumb-box">
                    <img
                      src={posterSrc}
                      alt={item.title || 'Instagram Reel preview'}
                      className="reel-showcase-img"
                      style={{ objectPosition: item.thumbnail ? 'center top' : fallback.pos }}
                      loading="lazy"
                    />
                    <div className="reel-thumb-vignette" aria-hidden="true" />
                    <span className="reel-duration-chip">
                      <Film size={12} />
                      Reel
                    </span>
                    <div className="reel-center-play" aria-hidden="true">
                      <div className="reel-play-circle">
                        <Play size={22} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="reel-card-body">
                    <span className="reel-topic-badge">{item.topic || 'Clinic Reel'}</span>
                    <h3 className="reel-showcase-title">
                      {item.title || 'Dr. Gauri Joshi Wellness Reel'}
                    </h3>
                    <div className="reel-showcase-footer">
                      <span className="reel-handle-mini">@{instagramConfig.handle}</span>
                      <span className="reel-watch-cta">
                        {lang === 'mr' ? 'रील प्ले करा' : 'Play Reel'} <Play size={13} fill="currentColor" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Mode 3: Curated Vertical Reel Cards with Real Instagram Reel Cover Screenshots */}
        {!showBeholdLive && !showDirectEmbeds && !beholdLoading && (
          <div className="reels-grid">
            {copy.placeholderCards.map((card, idx) => {
              const fallback = FALLBACK_SCREENSHOTS[idx % FALLBACK_SCREENSHOTS.length];
              const thumbSrc = card.thumbnail || fallback.src;
              const thumbPos = card.thumbnailPosition || fallback.pos;

              return (
                <a
                  key={card.id}
                  href={instagramConfig.reelsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reel-showcase-card accent-${card.accent}`}
                >
                  <div className="reel-thumb-box">
                    <img
                      src={thumbSrc}
                      alt={card.title}
                      className="reel-showcase-img"
                      style={{ objectPosition: thumbPos }}
                      loading="lazy"
                    />
                    <div className="reel-thumb-vignette" aria-hidden="true" />
                    <span className="reel-duration-chip">
                      <Film size={12} />
                      {card.duration}
                    </span>
                    <div className="reel-center-play" aria-hidden="true">
                      <div className="reel-play-circle">
                        <Play size={22} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="reel-card-body">
                    <span className="reel-topic-badge">{card.topic}</span>
                    <h3 className="reel-showcase-title">{card.title}</h3>
                    <p className="reel-showcase-caption">{card.caption}</p>

                    <div className="reel-showcase-footer">
                      <span className="reel-handle-mini">@{instagramConfig.handle}</span>
                      <span className="reel-watch-cta">
                        {copy.watchOnIgBtn} <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

