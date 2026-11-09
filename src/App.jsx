import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Activity,
  HandHeart,
  HeartHandshake,
  Apple,
  Brain,
  Heart,
  Smile,
  Phone,
  MessageCircle,
  CalendarCheck,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Globe,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Star,
  Stethoscope,
  ExternalLink,
  Laptop,
  Zap,
  Video,
  Mail,
  Globe2,
  QrCode,
} from 'lucide-react';
import { CLINIC_CONFIG, CONTENT } from './data/clinicData';
import { ClinicLogo } from './components/ClinicLogo';
import { DoctorPortraitFrame } from './components/DoctorPortraitFrame';
import { LeafDecor } from './components/LeafDecor';

const ICON_MAP = {
  Sparkles,
  Activity,
  HandHeart,
  HeartHandshake,
  Apple,
  Brain,
  Heart,
  Smile,
};

export function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('gj_clinic_lang') || 'en';
    } catch {
      return 'en';
    }
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeConditionId, setActiveConditionId] = useState('pain');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    timeSlot: '',
    message: '',
  });
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const t = CONTENT[lang];
  const docInfo = CLINIC_CONFIG.doctorCredentials[lang];
  const locInfo = CLINIC_CONFIG.locationAndHours[lang];

  useEffect(() => {
    try {
      localStorage.setItem('gj_clinic_lang', lang);
    } catch {
      // ignore storage error
    }
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: prev.service || t.contactSection.serviceOptions[0],
      timeSlot: prev.timeSlot || t.contactSection.timeOptions[0],
    }));
  }, [lang, t.contactSection.serviceOptions, t.contactSection.timeOptions]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'mr' : 'en'));
    setMobileMenuOpen(false);
  };

  const buildWhatsAppUrl = (customText) => {
    const defaultText =
      lang === 'mr'
        ? `नमस्कार डॉ. गौरी जोशी यांचे होमिओ केयर (रहाटणी, पुणे), मला अपॉइंटमेंट घ्यायची आहे.`
        : `Hello Dr. Gauri Joshi's Homoeo Care (Rahatani, Pune), I would like to book a consultation slot.`;
    const encoded = encodeURIComponent(customText || defaultText);
    return `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encoded}`;
  };

  const handleSelectServiceForBooking = (serviceTitle) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceTitle,
    }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickChipJump = (categoryId) => {
    setActiveConditionId(categoryId);
    const condEl = document.getElementById('conditions');
    if (condEl) {
      condEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppFormSubmit = (e) => {
    e.preventDefault();
    const msg =
      lang === 'mr'
        ? `नमस्कार डॉ. गौरी जोशी यांचे होमिओ केयर (रहाटणी, पुणे),\n\n*अपॉइंटमेंट विनंती:*\n• नाव: ${formData.name || '-'}\n• मोबाईल: ${formData.phone || '-'}\n• उपचार सेवा: ${formData.service}\n• पसंतीची वेळ: ${formData.timeSlot}\n• तक्रार/माहिती: ${formData.message || '-'}`
        : `Hello Dr. Gauri Joshi's Homoeo Care (Rahatani, Pune),\n\n*Appointment Request:*\n• Name: ${formData.name || '-'}\n• Phone: ${formData.phone || '-'}\n• Consultation: ${formData.service}\n• Preferred Slot: ${formData.timeSlot}\n• Note: ${formData.message || '-'}`;

    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const handleCallbackRequest = (e) => {
    e.preventDefault();
    setCallbackSubmitted(true);
  };

  const activeCondition =
    t.conditionFinder.categories.find((c) => c.id === activeConditionId) ||
    t.conditionFinder.categories[0];

  return (
    <div className="site-shell">
      {/* Top Clinic Signboard & Rahatani Location Bar */}
      <div className="top-utility-bar">
        <div className="container top-utility-inner">
          <div className="top-utility-left">
            <span className="live-status-pill">
              <span className="status-dot" />
              {locInfo.areaBadge}
            </span>
            <span className="utility-divider">•</span>
            <span className="utility-hours">
              <Clock size={13} />
              {locInfo.morningHours} &amp; {locInfo.eveningHours}
            </span>
          </div>
          <div className="top-utility-right">
            <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="utility-phone-link">
              <Phone size={13} />
              <span>{CLINIC_CONFIG.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-switch-btn utility-lang-btn"
              title={t.nav.switchLangTooltip}
            >
              <Globe size={13} />
              <span>{t.nav.switchLangLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Glassmorphic Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand-lockup" aria-label="Dr. Gauri Joshi's Homoeo Care">
            <ClinicLogo size={46} />
            <div className="brand-text">
              <span className="brand-marathi-sub">डॉ. गौरी जोशी यांचे होमिओ केयर</span>
              <span className="brand-main-title">
                Dr. Gauri Joshi&apos;s <em className="brand-lime-text">Homoeo Care</em>
              </span>
              <span className="brand-pillars-micro">{CLINIC_CONFIG.tagline}</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            <a href="#it-wellness" className="nav-link nav-link-featured">
              <Laptop size={14} className="nav-featured-icon" />
              <span>{t.nav.itWellness}</span>
              <span className="nav-micro-tag">IT Care</span>
            </a>
            <a href="#services" className="nav-link">
              {t.nav.services}
            </a>
            <a href="#conditions" className="nav-link">
              {t.nav.conditions}
            </a>
            <a href="#about" className="nav-link">
              {t.nav.about}
            </a>
            <a href="#stories" className="nav-link">
              {t.nav.stories}
            </a>
            <a href="#faq" className="nav-link">
              {t.nav.faq}
            </a>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-pill-toggle"
              aria-label="Toggle Language between English and Marathi"
            >
              <span className={lang === 'en' ? 'lang-opt active' : 'lang-opt'}>EN</span>
              <span className={lang === 'mr' ? 'lang-opt active' : 'lang-opt'}>मराठी</span>
            </button>

            <a href="#contact" className="btn btn-lime-header header-cta-btn">
              <CalendarCheck size={16} />
              <span>{t.nav.contact}</span>
            </a>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="container mobile-nav-inner">
              <a
                href="#it-wellness"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                💻 {t.nav.itWellness}
              </a>
              <a
                href="#services"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.services}
              </a>
              <a
                href="#conditions"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.conditions}
              </a>
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#stories"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.stories}
              </a>
              <a
                href="#faq"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.faq}
              </a>
              <div className="mobile-nav-cta-row">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp full-width"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle size={18} />
                  <span>{t.hero.primaryCta}</span>
                </a>
                <a
                  href="#contact"
                  className="btn btn-secondary-hero full-width"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CalendarCheck size={18} />
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION — Modern Wellness Tech Sanctuary + Signboard Identity */}
        <section id="home" className="hero-section">
          <div className="hero-ambient-glow glow-1" aria-hidden="true" />
          <div className="hero-ambient-glow glow-2" aria-hidden="true" />
          <div className="hero-bg-pattern" aria-hidden="true" />
          <LeafDecor className="leaf-tl" />
          <LeafDecor className="leaf-br" flip />

          <div className="container hero-grid">
            {/* Hero Left: Rahatani IT Badges + Signboard Identity + Quick Jump */}
            <div className="hero-content">
              <div className="hero-top-pills">
                <span className="hero-loc-pill">
                  <MapPin size={13} />
                  {t.hero.locationTag}
                </span>
                <span className="hero-work-pill">
                  <Video size={13} />
                  {t.hero.workFriendlyBadge}
                </span>
              </div>

              {/* Brochure cover identity: official logo + Marathi plaque + sage pill banner */}
              <div className="signboard-identity-card">
                <ClinicLogo size={96} variant="full" />
                <div className="signboard-titles">
                  <div className="signboard-marathi-plaque">{t.hero.marathiBadge}</div>
                  <div className="signboard-english-name">
                    <span className="sb-dr-name">{t.hero.clinicTitlePrefix}</span>{' '}
                    <span className="sb-homoeo-care">{t.hero.clinicTitleHighlight}</span>
                  </div>
                  <div className="brochure-tagline">{CLINIC_CONFIG.tagline}</div>
                </div>
              </div>

              <div className="brochure-pill-banner">
                {lang === 'mr'
                  ? 'तुमच्या आरोग्याचे उपाय इथून सुरू होतात!'
                  : 'Your Health Solutions Start Here!'}
              </div>

              {/* The 5 Specialties Strip from the bottom of the signboard */}
              <div className="signboard-pillars-strip" aria-label="Clinic Specialties">
                {t.hero.signboardPillars.map((pillar, idx) => (
                  <React.Fragment key={pillar}>
                    <span className="pillar-chip">{pillar}</span>
                    {idx < t.hero.signboardPillars.length - 1 && (
                      <span className="pillar-pipe" aria-hidden="true">
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h1 className="hero-headline">{t.hero.headline}</h1>
              <p className="hero-subheadline">{t.hero.subheadline}</p>

              {/* Interactive Quick Concern Selector Chips */}
              <div className="hero-quick-jump-box">
                <span className="quick-jump-label">{t.hero.quickPromptLabel}</span>
                <div className="quick-chips-row">
                  {t.hero.quickChips.map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      className="quick-jump-chip"
                      onClick={() => handleQuickChipJump(chip.id)}
                    >
                      <span className="chip-emoji" aria-hidden="true">
                        {chip.emoji}
                      </span>
                      <span>{chip.label}</span>
                      <ArrowRight size={13} className="chip-arrow" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="hero-cta-group">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lime-cta"
                >
                  <MessageCircle size={20} />
                  <span>{t.hero.primaryCta}</span>
                </a>
                <a href="#contact" className="btn btn-secondary-hero">
                  <CalendarCheck size={19} />
                  <span>{t.hero.secondaryCta}</span>
                </a>
                <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="btn btn-ghost-hero">
                  <Phone size={18} />
                  <span>{t.hero.callCta}</span>
                </a>
              </div>

              {/* Key Trust Counters */}
              <div className="hero-stats-row">
                {t.hero.stats.map((st) => (
                  <div key={st.label} className="hero-stat-item">
                    <strong className="stat-val">{st.value}</strong>
                    <span className="stat-lbl">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right: Dr. Gauri Joshi's Portrait Frame */}
            <div className="hero-portrait-col">
              <DoctorPortraitFrame
                photoUrl={CLINIC_CONFIG.doctorPhotoUrl}
                lang={lang}
                doctorName={docInfo.name}
                qualification={docInfo.qualifications}
                experienceBadge={docInfo.experienceBadge}
                tagline={docInfo.regNo}
              />
            </div>
          </div>
        </section>

        {/* NEW: IT & DESK-LIFE WELLNESS BENTO SECTION (RAHATANI / WAKAD / HINJEWADI) */}
        <section id="it-wellness" className="section it-bento-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow teal-eyebrow">
                <Laptop size={14} />
                <span>{t.itWellnessSection.eyebrow}</span>
              </span>
              <h2 className="section-title">{t.itWellnessSection.title}</h2>
              <p className="section-subtitle">{t.itWellnessSection.subtitle}</p>
            </div>

            <div className="it-bento-grid">
              {t.itWellnessSection.cards.map((card, idx) => (
                <article
                  key={card.title}
                  className={`it-bento-card it-bento-card-${idx + 1}`}
                >
                  {idx === 0 && (
                    <img
                      className="bento-photo"
                      src="/images/acupressure.jpg"
                      alt="Acupressure therapy session"
                      loading="lazy"
                    />
                  )}
                  <div className="bento-card-top">
                    <span className="bento-modality-tag">{card.tag}</span>
                    <span className="bento-highlight-badge">
                      <Zap size={12} />
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="bento-title">{card.title}</h3>
                  <p className="bento-desc">{card.desc}</p>

                  <div className="bento-metrics-row">
                    {card.metrics.map((m) => (
                      <span key={m} className="bento-metric-chip">
                        <CheckCircle2 size={14} />
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="bento-card-footer">
                    <button
                      type="button"
                      className="bento-action-btn"
                      onClick={() => handleSelectServiceForBooking(card.ctaService)}
                    >
                      <span>{t.nav.contact}</span>
                      <ArrowRight size={15} />
                    </button>
                    <a
                      href={buildWhatsAppUrl(
                        lang === 'mr'
                          ? `नमस्कार डॉ. गौरी जोशी, मला "${card.title}" साठी अपॉइंटमेंट घ्यायची आहे.`
                          : `Hello Dr. Gauri Joshi, I would like to book a slot for "${card.title}".`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-wa-link"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 INTEGRATIVE SPECIALTIES SECTION */}
        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">{t.servicesSection.eyebrow}</span>
              <h2 className="section-title">{t.servicesSection.title}</h2>
              <p className="section-subtitle">{t.servicesSection.subtitle}</p>
            </div>

            <div className="services-grid">
              {t.servicesSection.items.map((srv, index) => {
                const IconComponent = ICON_MAP[srv.icon] || Sparkles;
                return (
                  <article key={srv.id} className={`service-card service-card-${index + 1}`}>
                    <div className="service-card-top">
                      <div className="service-icon-wrap">
                        <IconComponent size={25} />
                      </div>
                      <span className="service-badge">{srv.badge}</span>
                    </div>

                    <h3 className="service-title">{srv.title}</h3>
                    <p className="service-sub-lang">{srv.marathiTitle}</p>
                    <p className="service-short-desc">{srv.shortDesc}</p>
                    <p className="service-detail-desc">{srv.detailDesc}</p>

                    <div className="service-meta-box">
                      <h4 className="service-meta-heading">
                        {t.servicesSection.whatToExpectLabel}
                      </h4>
                      <ul className="service-benefit-list">
                        {srv.benefits.map((b) => (
                          <li key={b}>
                            <CheckCircle2 size={15} className="benefit-check" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-conditions-tags">
                      <span className="conditions-label">
                        {t.servicesSection.conditionsLabel}
                      </span>
                      <div className="condition-pills-wrap">
                        {srv.conditions.map((cond) => (
                          <span key={cond} className="condition-mini-pill">
                            {cond}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="service-card-cta"
                      onClick={() => handleSelectServiceForBooking(srv.title)}
                    >
                      <span>
                        {t.servicesSection.bookThisService} {srv.title}
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE SYMPTOM / CONDITION FINDER */}
        <section id="conditions" className="section condition-finder-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">{t.conditionFinder.eyebrow}</span>
              <h2 className="section-title">{t.conditionFinder.title}</h2>
              <p className="section-subtitle">{t.conditionFinder.subtitle}</p>
            </div>

            <div className="condition-explorer-layout">
              {/* Category Tabs */}
              <div className="condition-tabs" role="tablist">
                {t.conditionFinder.categories.map((cat) => {
                  const CatIcon = ICON_MAP[cat.icon] || Activity;
                  const isActive = cat.id === activeCondition.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`condition-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveConditionId(cat.id)}
                    >
                      <span className="condition-tab-icon">
                        <CatIcon size={20} />
                      </span>
                      <span className="condition-tab-label">{cat.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Condition Detail Panel */}
              <div className="condition-detail-panel" role="tabpanel">
                <div className="condition-panel-header">
                  <div>
                    <span className="recommended-combo-label">
                      {t.conditionFinder.recommendedPillarsLabel}
                    </span>
                    <div className="recommended-pillars-row">
                      {activeCondition.pillars.map((p, idx) => (
                        <React.Fragment key={p}>
                          <span className="combo-pillar-badge">{p}</span>
                          {idx < activeCondition.pillars.length - 1 && (
                            <span className="combo-plus">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="condition-panel-title">{activeCondition.title}</h3>
                <p className="condition-panel-summary">{activeCondition.summary}</p>

                <div className="condition-symptoms-grid">
                  {activeCondition.symptoms.map((sym) => (
                    <div key={sym} className="symptom-check-card">
                      <CheckCircle2 size={17} className="symptom-check-icon" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>

                <div className="condition-approach-callout">
                  <Stethoscope size={22} className="approach-icon" />
                  <p>{activeCondition.approach}</p>
                </div>

                <div className="condition-panel-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleSelectServiceForBooking(activeCondition.title)}
                  >
                    <CalendarCheck size={18} />
                    <span>
                      {t.conditionFinder.consultBtnLabel} {activeCondition.title}
                    </span>
                  </button>
                  <a
                    href={buildWhatsAppUrl(
                      lang === 'mr'
                        ? `नमस्कार डॉ. गौरी जोशी, मला "${activeCondition.title}" संदर्भात अपॉइंटमेंट घ्यायची आहे.`
                        : `Hello Dr. Gauri Joshi, I would like to book a consultation regarding "${activeCondition.title}".`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-outline"
                  >
                    <MessageCircle size={18} />
                    <span>{t.hero.primaryCta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOLISTIC SYNERGY BANNER */}
        <section className="section synergy-section">
          <div className="container">
            <div className="section-header light">
              <span className="section-eyebrow lime">{t.synergySection.eyebrow}</span>
              <h2 className="section-title light">{t.synergySection.title}</h2>
              <p className="section-subtitle light">{t.synergySection.subtitle}</p>
            </div>

            <div className="synergy-cards-grid">
              {t.synergySection.cards.map((card) => (
                <div key={card.title} className="synergy-card">
                  <span className="synergy-combo-pill">{card.combo}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT DR. GAURI JOSHI & 3-STEP PATIENT JOURNEY */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-narrative-col">
                <figure className="about-photo-frame">
                  <img
                    src="/images/consultation.jpg"
                    alt="Dr. Gauri Joshi in consultation at Homoeo Care"
                    loading="lazy"
                  />
                  <figcaption className="about-photo-badge">
                    {lang === 'mr'
                      ? 'होमिओ केयर: समग्र आरोग्यातील तुमचा साथीदार'
                      : 'Homoeo Care: Your Partner in Holistic Wellness'}
                  </figcaption>
                </figure>
                <span className="section-eyebrow">{t.aboutSection.eyebrow}</span>
                <h2 className="section-title">{t.aboutSection.title}</h2>
                <p className="about-lead-subtitle">{t.aboutSection.subtitle}</p>
                <div className="about-credentials-bar">{docInfo.qualifications}</div>

                {t.aboutSection.paragraphs.map((p) => (
                  <p key={p} className="about-body-text">
                    {p}
                  </p>
                ))}

                <div className="about-highlights-list">
                  {t.aboutSection.highlights.map((hl) => (
                    <div key={hl.title} className="about-highlight-item">
                      <div className="about-hl-icon">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4>{hl.title}</h4>
                        <p>{hl.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Step Patient Journey Card */}
              <div id="journey" className="journey-card-col">
                <div className="journey-sanctuary-card">
                  <span className="section-eyebrow">{t.journeySection.eyebrow}</span>
                  <h3 className="journey-card-title">{t.journeySection.title}</h3>
                  <p className="journey-card-sub">{t.journeySection.subtitle}</p>

                  <div className="journey-steps-timeline">
                    {t.journeySection.steps.map((st) => (
                      <div key={st.step} className="journey-step-row">
                        <div className="journey-step-num">{st.step}</div>
                        <div className="journey-step-body">
                          <h4>{st.title}</h4>
                          <p>{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="journey-card-footer">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary full-width"
                    >
                      <MessageCircle size={18} />
                      <span>{t.hero.primaryCta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PATIENT STORIES / GOOGLE REVIEWS */}
        <section id="stories" className="section testimonials-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow google-eyebrow">
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>{t.testimonialsSection.eyebrow}</span>
              </span>
              <h2 className="section-title">{t.testimonialsSection.title}</h2>
              <p className="section-subtitle">{t.testimonialsSection.subtitle}</p>
            </div>

            <div className="testimonials-grid">
              {t.testimonialsSection.items.map((item) => (
                <blockquote key={item.name} className="testimonial-card">
                  <div className="testimonial-card-top-meta">
                    <div className="testimonial-stars" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#FBBC04" color="#FBBC04" />
                      ))}
                    </div>
                    <span className="testimonial-source-badge">
                      <span className="google-icon-dot" aria-hidden="true">G</span>
                      {item.timeAgo}
                    </span>
                  </div>

                  <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>

                  <footer className="testimonial-author">
                    <div className="author-name-row">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="author-name-link"
                          title="View review on Google Maps"
                        >
                          <strong>{item.name}</strong>
                          <ExternalLink size={13} className="author-ext-icon" />
                        </a>
                      ) : (
                        <strong>{item.name}</strong>
                      )}
                    </div>
                    <span className="author-tag">{item.tag}</span>
                    {item.meta && <span className="author-google-meta">{item.meta}</span>}
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="testimonials-footer-cta">
              <a
                href={t.testimonialsSection.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary-outline google-reviews-btn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>{t.testimonialsSection.viewAllText}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="section faq-section">
          <div className="container faq-container">
            <div className="section-header">
              <span className="section-eyebrow">{t.faqSection.eyebrow}</span>
              <h2 className="section-title">{t.faqSection.title}</h2>
            </div>

            <div className="faq-accordion">
              {t.faqSection.items.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={20} className="faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT & APPOINTMENT SECTION */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">{t.contactSection.eyebrow}</span>
              <h2 className="section-title">{t.contactSection.title}</h2>
              <p className="section-subtitle">{t.contactSection.subtitle}</p>
            </div>

            <div className="contact-grid">
              {/* Left: Appointment & Inquiry Form */}
              <div className="contact-form-card">
                <h3 className="form-card-title">{t.contactSection.formTitle}</h3>
                <p className="form-card-subtitle">{t.contactSection.formSubtitle}</p>

                <form onSubmit={handleWhatsAppFormSubmit} className="appointment-form">
                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="patient-name">{t.contactSection.nameLabel}</label>
                      <input
                        id="patient-name"
                        type="text"
                        required
                        placeholder={t.contactSection.namePlaceholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="patient-phone">{t.contactSection.phoneLabel}</label>
                      <input
                        id="patient-phone"
                        type="tel"
                        required
                        placeholder={t.contactSection.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="service-select">{t.contactSection.serviceLabel}</label>
                      <select
                        id="service-select"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        {t.contactSection.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="time-select">{t.contactSection.timeLabel}</label>
                      <select
                        id="time-select"
                        value={formData.timeSlot}
                        onChange={(e) =>
                          setFormData({ ...formData, timeSlot: e.target.value })
                        }
                      >
                        {t.contactSection.timeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="patient-message">{t.contactSection.messageLabel}</label>
                    <textarea
                      id="patient-message"
                      rows={3}
                      placeholder={t.contactSection.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-submit-buttons">
                    <button type="submit" className="btn btn-whatsapp full-width">
                      <MessageCircle size={19} />
                      <span>{t.contactSection.submitWhatsappBtn}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCallbackRequest}
                      className="btn btn-secondary-outline full-width"
                    >
                      <Phone size={17} />
                      <span>{t.contactSection.submitCallbackBtn}</span>
                    </button>
                  </div>

                  {callbackSubmitted && (
                    <div className="callback-success-banner" role="status">
                      <CheckCircle2 size={18} />
                      <span>{t.contactSection.callbackSuccess}</span>
                    </div>
                  )}

                  <p className="privacy-microcopy">
                    <ShieldCheck size={15} />
                    <span>{t.contactSection.privacyNote}</span>
                  </p>
                </form>
              </div>

              {/* Right: Clinic Signboard Card, Timings & Direct Contact */}
              <div className="clinic-info-card">
                <div className="clinic-info-signboard-header">
                  <ClinicLogo size={54} />
                  <div>
                    <span className="info-marathi-title">{locInfo.marathiAccentTitle}</span>
                    <h3 className="info-clinic-name">{locInfo.clinicName}</h3>
                  </div>
                </div>
                <div className="brochure-pill-banner small">
                  {lang === 'mr'
                    ? 'आजच तुमची अपॉइंटमेंट निश्चित करा!'
                    : 'Schedule Your Appointment Today!'}
                </div>

                <div className="clinic-info-block">
                  <div className="info-block-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4>{t.contactSection.hoursHeading}</h4>
                    <p>{locInfo.morningHours}</p>
                    <p>{locInfo.eveningHours}</p>
                    <p className="sunday-badge">{locInfo.sundayNote}</p>
                  </div>
                </div>

                <div className="clinic-info-block">
                  <div className="info-block-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>{t.contactSection.addressHeading}</h4>
                    <p>{locInfo.addressLine1}</p>
                    <p>{locInfo.addressLine2}</p>
                    <p className="mode-note">{locInfo.consultationModes}</p>
                  </div>
                </div>

                <div className="clinic-direct-contact-list">
                  <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="direct-contact-pill">
                    <Phone size={18} />
                    <span>{CLINIC_CONFIG.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${CLINIC_CONFIG.email}`} className="direct-contact-pill">
                    <Mail size={18} />
                    <span>{CLINIC_CONFIG.email}</span>
                  </a>
                  <a
                    href={CLINIC_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-contact-pill maps-pill"
                  >
                    <MapPin size={18} />
                    <span>{t.contactSection.openMapsBtn}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="clinic-qr-row">
                  <img
                    src="/images/qr-location.png"
                    alt="QR code for clinic location map"
                    className="clinic-qr-img"
                    loading="lazy"
                  />
                  <div>
                    <h4>
                      <QrCode size={16} />
                      {lang === 'mr' ? 'QR कोड स्कॅन करा' : 'Scan QR Code'}
                    </h4>
                    <p>
                      {lang === 'mr'
                        ? 'नकाशावर क्लिनिक सहज शोधा.'
                        : 'Find us easily with our interactive location map.'}
                    </p>
                    <span className="clinic-website">
                      <Globe2 size={14} />
                      {CLINIC_CONFIG.website}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <ClinicLogo size={50} />
              <div>
                <div className="footer-marathi">डॉ. गौरी जोशी यांचे होमिओ केयर</div>
                <div className="footer-title">
                  Dr. Gauri Joshi&apos;s <span>Homoeo Care</span>
                </div>
              </div>
            </div>
            <p className="footer-tagline">{t.footer.tagline}</p>
            <div className="footer-contact-row">
              <a href={`tel:${CLINIC_CONFIG.phoneTel}`}>
                <Phone size={14} /> {CLINIC_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${CLINIC_CONFIG.email}`}>
                <Mail size={14} /> {CLINIC_CONFIG.email}
              </a>
              <span>
                <MapPin size={14} /> {locInfo.addressLine1}, {locInfo.addressLine2}
              </span>
            </div>
          </div>

          <div className="footer-pillars-list">
            {t.hero.signboardPillars.map((p) => (
              <span key={p} className="footer-pillar-tag">
                {p}
              </span>
            ))}
          </div>

          <div className="footer-bottom-bar">
            <p>
              &copy; {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Desktop Floating WhatsApp Quick-Chat Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="desktop-floating-wa"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>{lang === 'mr' ? 'व्हॉट्सॲप बुकिंग' : 'Book on WhatsApp'}</span>
      </a>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="mobile-sticky-bar" aria-label="Quick Contact Actions">
        <a href={`tel:${CLINIC_CONFIG.phoneTel}`} className="mobile-bar-btn call-btn">
          <Phone size={17} />
          <span>{t.hero.callCta}</span>
        </a>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn whatsapp-btn"
        >
          <MessageCircle size={17} />
          <span>WhatsApp</span>
        </a>
        <a href="#contact" className="mobile-bar-btn book-btn">
          <CalendarCheck size={17} />
          <span>{t.nav.contact}</span>
        </a>
      </div>
    </div>
  );
}
export default App;
