import React, { useState, useEffect } from 'react';
import { Instagram, Play, ExternalLink, Film, Sparkles } from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';

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
        const selected = (videos.length > 0 ? videos : posts).slice(0, 3);
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
            {beholdPosts.map((post) => {
              const thumbUrl = post.thumbnailUrl || post.mediaUrl;
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
                    {thumbUrl ? (
                      <img src={thumbUrl} alt={captionText.slice(0, 80) || 'Clinic Reel'} loading="lazy" />
                    ) : (
                      <div className="reel-fallback-gradient" />
                    )}
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

        {/* Mode 2: Official Embedded Instagram Reels via Shortcode URLs */}
        {showDirectEmbeds && (
          <div className="reels-embed-grid">
            {configuredReels.map((item) => {
              const embedUrl = getInstagramEmbedUrl(item.url);
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
            })}
          </div>
        )}

        {/* Mode 3: Curated Vertical 9:16 Reel Showcase Cards (links directly to @homoeo_care_by_dr_gauri_joshi/reels/) */}
        {!showBeholdLive && !showDirectEmbeds && !beholdLoading && (
          <div className="reels-grid">
            {copy.placeholderCards.map((card) => (
              <a
                key={card.id}
                href={instagramConfig.reelsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`reel-showcase-card accent-${card.accent}`}
              >
                <div className="reel-showcase-top">
                  <span className="reel-topic-badge">{card.topic}</span>
                  <span className="reel-duration-chip">
                    <Film size={12} />
                    {card.duration}
                  </span>
                </div>

                <div className="reel-showcase-center">
                  <div className="reel-play-circle" aria-hidden="true">
                    <Play size={24} fill="currentColor" />
                  </div>
                  <h3 className="reel-showcase-title">{card.title}</h3>
                  <p className="reel-showcase-caption">{card.caption}</p>
                </div>

                <div className="reel-showcase-footer">
                  <span className="reel-handle-mini">@{instagramConfig.handle}</span>
                  <span className="reel-watch-cta">
                    {copy.watchOnIgBtn} <ExternalLink size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

