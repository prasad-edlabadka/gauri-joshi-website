import React, { useState, useRef } from 'react';
import { Camera, Sparkles, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

/**
 * Displays Dr. Gauri Joshi's portrait on the Home page.
 * - Automatically displays `/doctor-photo.jpg` once added to the `public/` folder
 *   (or any path configured in `CLINIC_CONFIG.doctorPhotoUrl`).
 * - Includes an elegant artistic placeholder until the photo is dropped in,
 *   plus a quick "Preview Photo" file picker so the owner can test any photo live in the browser.
 */
export function DoctorPortraitFrame({
  photoUrl,
  lang,
  doctorName,
  qualification,
  experienceBadge,
  tagline,
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const [customPreviewUrl, setCustomPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const activePhotoSrc = customPreviewUrl || photoUrl;
  const showPhoto = Boolean(activePhotoSrc) && (!imgFailed || Boolean(customPreviewUrl));

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setCustomPreviewUrl(objectUrl);
      setImgFailed(false);
    }
  };

  return (
    <div className="doctor-portrait-wrapper">
      {/* Decorative organic backdrop rings */}
      <div className="portrait-Organic-halo" aria-hidden="true" />
      <div className="portrait-accent-dots" aria-hidden="true" />

      <div className="doctor-portrait-card">
        {/* Top gold/green clinic ribbon inspired by the signboard */}
        <div className="portrait-top-ribbon">
          <Sparkles size={14} className="ribbon-icon" />
          <span>
            {lang === 'mr'
              ? 'डॉ. गौरी जोशी यांचे होमिओ केयर'
              : "Dr. Gauri Joshi's Homoeo Care"}
          </span>
        </div>

        {/* Main Image or Artistic Portrait Placeholder */}
        <div className="portrait-image-stage">
          {showPhoto ? (
            <img
              src={activePhotoSrc}
              alt={doctorName}
              className="doctor-portrait-img"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="portrait-placeholder-art">
              {/* Warm botanical + doctor silhouette SVG illustration */}
              <svg
                viewBox="0 0 360 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="portrait-placeholder-svg"
                aria-label={doctorName}
              >
                <defs>
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="360" y2="400" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EAF5F4" />
                    <stop offset="55%" stopColor="#D3EAE8" />
                    <stop offset="100%" stopColor="#B9DCDA" />
                  </linearGradient>
                  <linearGradient id="haloGrad" x1="180" y1="50" x2="180" y2="320" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#65AB84" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#56B0E3" stopOpacity="0.12" />
                  </linearGradient>
                  <linearGradient id="coatGrad" x1="90" y1="220" x2="270" y2="400" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E4ECE7" />
                  </linearGradient>
                </defs>

                <rect width="360" height="400" fill="url(#bgGrad)" />

                {/* Soft glowing botanical circle */}
                <circle cx="180" cy="185" r="120" fill="url(#haloGrad)" />
                <circle
                  cx="180"
                  cy="185"
                  r="120"
                  stroke="#459A9D"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* Botanical leaves left & right */}
                <path
                  d="M58 290C48 240 68 195 102 175C96 225 82 262 58 290Z"
                  fill="#65AB84"
                  fillOpacity="0.28"
                />
                <path
                  d="M302 290C312 240 292 195 258 175C264 225 278 262 302 290Z"
                  fill="#459A9D"
                  fillOpacity="0.35"
                />

                {/* Elegant female doctor avatar silhouette */}
                {/* Hair backdrop */}
                <path
                  d="M126 155C126 112 150 92 180 92C210 92 234 112 234 155C234 185 226 208 216 218H144C134 208 126 185 126 155Z"
                  fill="#243830"
                />
                {/* Head & neck */}
                <circle cx="180" cy="148" r="38" fill="#F3D6C1" />
                <path
                  d="M134 142C138 110 158 98 184 98C210 98 225 114 227 144C215 130 198 122 177 123C157 124 143 132 134 142Z"
                  fill="#1D2E28"
                />
                {/* Warm smile & gentle eyes */}
                <path
                  d="M164 146C166 143 170 143 172 146"
                  stroke="#3A2E28"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M188 146C190 143 194 143 196 146"
                  stroke="#3A2E28"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M171 162C176 167 184 167 189 162"
                  stroke="#B86B52"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                {/* Traditional small bindi */}
                <circle cx="180" cy="136" r="2.3" fill="#B53838" />

                {/* Neck */}
                <rect x="167" y="180" width="26" height="28" rx="10" fill="#EBC7AE" />

                {/* Inner emerald kurta/blouse */}
                <path d="M145 205H215L200 285H160L145 205Z" fill="#459A9D" />

                {/* Doctor Coat */}
                <path
                  d="M86 340C92 252 124 208 164 204L180 262L196 204C236 208 268 252 274 340H86Z"
                  fill="url(#coatGrad)"
                />
                {/* Coat lapels */}
                <path
                  d="M164 204L148 252L180 282L212 252L196 204"
                  stroke="#C7D6CE"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Stethoscope / Healing Emblem on Coat */}
                <path
                  d="M146 218C142 246 148 268 162 276"
                  stroke="#459A9D"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="164" cy="279" r="8" fill="#459A9D" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="212" cy="256" r="11" fill="#65AB84" fillOpacity="0.22" />
                <path d="M210 250H214V254H218V258H214V262H210V258H206V254H210V250Z" fill="#459A9D" />
              </svg>

              {/* Interactive helper overlay to preview or replace photo */}
              <div className="portrait-placeholder-overlay">
                <button
                  type="button"
                  className="portrait-upload-trigger"
                  onClick={() => fileInputRef.current?.click()}
                  title={
                    lang === 'mr'
                      ? 'डॉ. गौरी जोशी यांचा फोटो प्रिव्ह्यू करण्यासाठी क्लिक करा'
                      : "Click to preview Dr. Gauri Joshi's photo"
                  }
                >
                  <Camera size={15} />
                  <span>
                    {lang === 'mr'
                      ? 'डॉक्टरांचा फोटो येथे दिसेल (प्रिव्ह्यू करा)'
                      : "Doctor's Photo Slot (Click to Preview)"}
                  </span>
                </button>
                <span className="portrait-file-hint">
                  {lang === 'mr'
                    ? 'किंवा public/doctor-photo.jpg फाईल ठेवा'
                    : 'Or save image as public/doctor-photo.jpg'}
                </span>
              </div>
            </div>
          )}

          {customPreviewUrl && (
            <button
              type="button"
              className="portrait-change-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera size={14} />
              <span>{lang === 'mr' ? 'फोटो बदला' : 'Change Photo'}</span>
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            aria-label="Upload doctor portrait preview"
          />
        </div>

        {/* Doctor Name & Credentials Plate at Bottom of Portrait */}
        <div className="portrait-caption-plate">
          <div className="portrait-caption-main">
            <h2 className="portrait-doctor-name">{doctorName}</h2>
            <p className="portrait-doctor-qual">{qualification}</p>
            <p className="portrait-doctor-tagline">{tagline}</p>
          </div>
          <div className="portrait-trust-pills">
            <span className="trust-pill">
              <Award size={14} />
              {experienceBadge}
            </span>
            <span className="trust-pill">
              <HeartHandshake size={14} />
              {lang === 'mr' ? '५-आयामी समग्र उपचार' : '5-Pillar Holistic Care'}
            </span>
          </div>
        </div>
      </div>

      {/* Clean anchored trust card below the portrait (in-flow, never overlapping photo or banner) */}
      <div className="portrait-footer-trust-card">
        <div className="floating-icon-box teal">
          <ShieldCheck size={20} />
        </div>
        <div>
          <strong>{lang === 'mr' ? '१००% नैसर्गिक व सुरक्षित उपचार' : 'Safe & Root-Cause Healing'}</strong>
          <span>
            {lang === 'mr'
              ? 'कोणतेही दुष्परिणाम नाहीत • शास्त्रीय होमिओपॅथी'
              : 'Gentle, individualized remedies with zero drowsiness or side effects'}
          </span>
        </div>
      </div>
    </div>
  );
}

