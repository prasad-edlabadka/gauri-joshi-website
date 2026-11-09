/**
 * ============================================================================
 * EASY-TO-EDIT CLINIC CONFIGURATION
 * Update Dr. Gauri Joshi's photo, phone number, WhatsApp, address, and timings
 * right here. All changes automatically reflect across both English & Marathi!
 * ============================================================================
 */
export const CLINIC_CONFIG = {
  // 1. Doctor's Photo: Place her photo at `public/doctor-photo.jpg`
  //    or paste any image filename/URL below.
  doctorPhotoUrl: '/doctor-photo.jpg',

  // 2. Phone & WhatsApp Contact (Update with actual clinic numbers)
  phoneDisplay: '+91 93259 14135',
  phoneTel: '+919325914135',
  whatsappNumber: '919325914135', // Country code + 10-digit number (no '+' or spaces)
  email: 'joshigauridr@gmail.com',
  website: 'www.drgaurijoshi.com',
  tagline: 'Pure Care, Pure Cure',

  // 3. Google Maps Location Link (Rahatani, Pune)
  googleMapsUrl: 'https://maps.google.com/?q=Veer+Arcade+Kokane+Chowk+Rahatani+Pune+411017',

  // 4. Doctor Qualifications & Experience (Bilingual)
  doctorCredentials: {
    en: {
      name: 'Dr. Gauri Joshi',
      qualifications:
        'B.H.M.S. | Certified Acupuncturist & Acupressure Therapist | Psychological Counselor | Clinical Nutritionist',
      shortQual: 'Homoeopath • Acupuncturist • Counselor • Clinical Nutritionist',
      experienceBadge: 'Pure Care, Pure Cure',
      regNo: 'Verified Holistic Practitioner • Rahatani, Pune',
    },
    mr: {
      name: 'डॉ. गौरी जोशी',
      qualifications:
        'B.H.M.S. | प्रमाणित ॲक्युपंक्चर व ॲक्युप्रेशर तज्ज्ञ | मानसशास्त्रीय समुपदेशक | क्लिनिकल न्यूट्रिशनिस्ट',
      shortQual: 'होमिओपॅथ • ॲक्युपंक्चर तज्ज्ञ • समुपदेशक • आहारतज्ज्ञ',
      experienceBadge: 'प्युअर केयर, प्युअर क्युअर',
      regNo: 'नोंदणीकृत होमिओपॅथिक व समग्र उपचार तज्ज्ञ • रहाटणी, पुणे',
    },
  },

  // 5. Clinic Address & Timings (Bilingual - Rahatani, Pune)
  locationAndHours: {
    en: {
      clinicName: "Dr. Gauri Joshi's Homoeo Care",
      marathiAccentTitle: 'डॉ. गौरी जोशी यांचे होमिओ केयर',
      areaBadge: 'Kokane Chowk, Rahatani • Near Pimple Saudagar & Wakad',
      addressLine1: '102, First Floor, Veer Arcade, Kokane Chowk',
      addressLine2: 'Rahatani, Pune – 411017',
      morningHours: 'Mon – Fri: 11:00 AM – 2:00 PM & 6:00 PM – 8:00 PM',
      eveningHours: 'Saturday: 11:00 AM – 2:00 PM',
      sundayNote: 'Sunday: Closed • Evening 6–8 PM slots ideal after office',
      consultationModes:
        'In-Clinic at Rahatani & Online Video Consultations for WFH / Busy Schedules',
    },
    mr: {
      clinicName: 'डॉ. गौरी जोशी यांचे होमिओ केयर',
      marathiAccentTitle: "Dr. Gauri Joshi's Homoeo Care",
      areaBadge: 'कोकणे चौक, रहाटणी • पिंपळे सौदागर व वाकड जवळ',
      addressLine1: '१०२, पहिला मजला, वीर आर्केड, कोकणे चौक',
      addressLine2: 'रहाटणी, पुणे – ४११०१७',
      morningHours: 'सोम – शुक्र: स. ११:०० ते दु. २:०० व सायं. ६:०० ते रा. ८:००',
      eveningHours: 'शनिवार: स. ११:०० ते दु. २:००',
      sundayNote: 'रविवार: बंद • ऑफिसनंतर सायं. ६–८ ची वेळ सोयीची',
      consultationModes:
        'रहाटणी क्लिनिकमध्ये प्रत्यक्ष आणि WFH / व्यस्त वेळापत्रकासाठी ऑनलाइन व्हिडिओ सल्ला उपलब्ध',
    },
  },
};

export const CONTENT = {
  en: {
    nav: {
      home: 'Home',
      itWellness: 'IT & Desk Wellness',
      services: '5 Healing Pillars',
      conditions: 'Symptom Guide',
      about: 'Dr. Gauri',
      stories: 'Reviews',
      faq: 'FAQ',
      contact: 'Book Slot',
      switchLangLabel: 'मराठी',
      switchLangTooltip: 'मराठीत वाचा',
    },
    hero: {
      locationTag: 'Rahatani, Pune • Serving Pimple Saudagar, Wakad & Hinjewadi',
      workFriendlyBadge: 'Post-Work Evening Slots (6–8 PM, Mon–Fri)',
      marathiBadge: 'डॉ. गौरी जोशी यांचे होमिओ केयर',
      clinicTitlePrefix: "Dr. Gauri Joshi's",
      clinicTitleHighlight: 'Homoeo Care',
      signboardPillars: [
        'HOMOEOPATHY',
        'ACUPRESSURE',
        'COUNSELING',
        'ACUPUNCTURE',
        'CLINICAL NUTRITION',
      ],
      headline: 'Modern Root-Cause Healing for Busy Minds & Bodies in Pune',
      subheadline:
        'Whether it’s tech-neck from 10-hour laptop days, sprint burnout & sleeplessness, PCOD, gut issues, or your child’s immunity—experience 5 science-backed natural therapies under one calm roof in Rahatani.',
      quickPromptLabel: 'Quick Jump — What are you looking to solve?',
      quickChips: [
        { id: 'pain', emoji: '💻', label: 'Tech-Neck, Back Pain & Migraine' },
        { id: 'mind', emoji: '🧠', label: 'Work Stress, Anxiety & Sleep' },
        { id: 'women', emoji: '🌸', label: 'PCOD, Thyroid & Hormones' },
        { id: 'gut', emoji: '🥗', label: 'Gut, Acidity, Fatty Liver & Weight' },
        { id: 'skin', emoji: '✨', label: 'Skin, Hair Fall & Allergies' },
        { id: 'child', emoji: '👶', label: 'Child Immunity & Allergies' },
      ],
      primaryCta: 'Book Slot on WhatsApp',
      secondaryCta: 'Schedule Consultation',
      callCta: 'Call Clinic',
      stats: [
        { value: '5-in-1', label: 'Holistic Specialties Under 1 Roof' },
        { value: 'Zero', label: 'Drowsiness or Side-Effects' },
        { value: '6–8 PM', label: 'Weekday Evening Slots for Working Pros' },
      ],
    },
    itWellnessSection: {
      eyebrow: 'DESIGNED FOR RAHATANI, WAKAD & HINJEWADI PROFESSIONALS',
      title: '10+ Hours on Screen? Reboot Your Spine, Gut & Mind.',
      subtitle:
        'High-output tech careers shouldn’t cost you your sleep, posture, or metabolism. Our targeted protocols fit seamlessly into your workday.',
      cards: [
        {
          tag: 'Acupuncture + Acupressure',
          badge: 'Fast Drug-Free Relief',
          title: 'Tech-Neck, Sciatica & Screen Migraines',
          desc: 'Sitting in ergonomic chairs still leaves deep paraspinal knots and nerve compression. Our precision meridian sessions release cervical stiffness, wrist strain, and throbbing headaches—without popping daily painkillers.',
          metrics: ['30–40 Min Decompression', 'Zero Drowsiness at Work'],
          ctaService: 'Acupuncture / Acupressure Therapy',
        },
        {
          tag: 'Counseling + Homoeopathy',
          badge: '100% Confidential',
          title: 'Burnout, High-Functioning Anxiety & Insomnia',
          desc: 'Can’t switch off your brain after late-night client calls? Combine judgment-free psychological counseling with gentle constitutional remedies that lower cortisol and restore deep, natural sleep.',
          metrics: ['Non-Habit Forming', 'In-Person or Video Session'],
          ctaService: 'Psychological Counseling Session',
        },
        {
          tag: 'Clinical Nutrition + Homoeopathy',
          badge: 'No Crash Diets',
          title: 'Desk-Job Metabolism, Fatty Liver, IBS & PCOD',
          desc: 'Irregular meal timings, coffee overload, and stress wreck your gut and hormones. Get a practical Indian meal blueprint (that works with office tiffins & WFH) paired with metabolic Homoeopathy.',
          metrics: ['Home-Food Based', 'Targets Insulin & Gut Health'],
          ctaService: 'Clinical Nutrition & Diet Plan',
        },
        {
          tag: 'Pediatric Homoeopathy + Nutrition',
          badge: 'Parent Favorite in Rahatani',
          title: 'Daycare & School Immunity Shield for Kids',
          desc: 'Tired of recurring cough, cold, tonsils, and antibiotic cycles every month? Sweet homoeopathic globules naturally train your child’s respiratory immunity so they miss fewer school days.',
          metrics: ['Kid-Friendly Sweet Pills', 'Builds Long-Term Immunity'],
          ctaService: 'Homoeopathy Consultation',
        },
      ],
    },
    servicesSection: {
      eyebrow: 'OUR 5 INTEGRATIVE SPECIALTIES',
      title: 'Five Complementary Pathways to Complete Wellness',
      subtitle:
        'True healing happens when physical symptoms, energy pathways, emotional well-being, and daily nourishment are addressed together.',
      bookThisService: 'Book Slot for',
      whatToExpectLabel: 'Why Patients Love It:',
      conditionsLabel: 'Top Conditions Treated:',
      items: [
        {
          id: 'homoeopathy',
          icon: 'Sparkles',
          badge: 'Root-Cause & Zero Drowsiness',
          title: 'Classical Homoeopathy',
          marathiTitle: 'होमिओपॅथी',
          shortDesc:
            'Gentle, individualized remedies tailored to your physical and emotional constitution—healing chronic ailments from the root without drowsiness.',
          detailDesc:
            'Unlike antihistamines or temporary suppressants that make you sleepy during work hours, classical homoeopathy calibrates your natural immunity safely.',
          benefits: [
            'Fixes the root cause of recurring allergies, skin & hormonal issues',
            'Zero drowsiness—stay sharp for coding, meetings, and daily life',
            'Safe for infants, expecting mothers, working adults, and seniors',
          ],
          conditions: [
            'Allergic Rhinitis, Sinusitis & Asthma',
            'PCOD, Thyroid & Hormonal Balance',
            'Acne, Eczema, Psoriasis & Hair Fall',
            'Recurrent Child Cold, Cough & Tonsils',
          ],
        },
        {
          id: 'acupuncture',
          icon: 'Activity',
          badge: 'Spine, Nerve & Pain Reset',
          title: 'Clinical Acupuncture',
          marathiTitle: 'ॲक्युपंक्चर',
          shortDesc:
            'Ultra-fine, sterile meridian therapy that releases natural endorphins, decompresses pinched nerves, and resets nervous system stress.',
          detailDesc:
            'Using hair-thin, single-use sterile needles at precise anatomical points, acupuncture boosts micro-circulation, melts stubborn trigger points, and accelerates tissue recovery.',
          benefits: [
            'Rapid drug-free relief from desk-job spine, neck, and nerve pain',
            'Down-regulates sympathetic ("fight-or-flight") stress response',
            'Improves sleep architecture and migraine frequency',
          ],
          conditions: [
            'Cervical Spondylosis & Tech-Neck',
            'Lower Back Pain, Sciatica & Slip Disc',
            'Chronic Migraines & Eye-Strain Headaches',
            'Frozen Shoulder, Knee Pain & Wrist Strain',
          ],
        },
        {
          id: 'acupressure',
          icon: 'HandHeart',
          badge: '100% Needle-Free Therapy',
          title: 'Therapeutic Acupressure',
          marathiTitle: 'ॲक्युप्रेशर',
          shortDesc:
            'Needle-free precision pressure on key reflex and marma points to dissolve postural stiffness, digital fatigue, and energy blocks.',
          detailDesc:
            'Perfect for anyone who prefers a completely needle-free experience. Rhythmic therapeutic pressure stimulates meridian flow and releases tight myofascial bands.',
          benefits: [
            '100% non-invasive, deeply restorative, and relaxing',
            'Relieves upper-back knots, neck stiffness, and mental exhaustion',
            'Supports sinus drainage, digestion, and circulation',
          ],
          conditions: [
            'Postural Neck & Shoulder Stiffness',
            'Stress-Induced Fatigue & Heaviness',
            'Sinus Congestion & Vertigo',
            'Senior Citizen Joint & Mobility Care',
          ],
        },
        {
          id: 'counseling',
          icon: 'HeartHandshake',
          badge: 'Confidential Mind Sanctuary',
          title: 'Psychological Counseling',
          marathiTitle: 'मानसशास्त्रीय समुपदेशन',
          shortDesc:
            'A warm, judgment-free, 100% confidential space to navigate work burnout, anxiety, overthinking, relationships, and life transitions.',
          detailDesc:
            'Mental clarity drives physical health. Through empathetic, structured counseling, Dr. Gauri helps professionals, couples, and youth build emotional resilience and calm.',
          benefits: [
            '100% private, empathetic, and stigma-free 1-on-1 sessions',
            'Actionable frameworks for anxiety, impostor syndrome & burnout',
            'Available both in-clinic in Rahatani and via private video call',
          ],
          conditions: [
            'Workplace Burnout & High-Functioning Anxiety',
            'Overthinking, Panic & Sleep Disturbances',
            'Couple, Marital & Family Communication',
            'Adolescent, Academic & Career Stress',
          ],
        },
        {
          id: 'nutrition',
          icon: 'Apple',
          badge: 'Practical Indian Diet Plans',
          title: 'Clinical Nutrition',
          marathiTitle: 'क्लिनिकल न्यूट्रिशन (आहारशास्त्र)',
          shortDesc:
            'Science-backed, home-cooked Indian therapeutic nutrition designed around your blood reports, metabolism, and busy Pune work schedule.',
          detailDesc:
            'No bland salads or expensive imported supplements. Get sustainable meal strategies that fix insulin resistance, gut inflammation, and energy crashes.',
          benefits: [
            'Built around familiar Maharashtrian & Indian home-cooked meals',
            'Easy to follow even with hybrid office days and busy mornings',
            'Reverses nutritional deficiencies (B12, Vit D, Iron) naturally',
          ],
          conditions: [
            'Sustainable Weight Loss & Fatty Liver',
            'PCOS, Pre-Diabetes & Thyroid Diet',
            'Acidity, GERD, IBS & Chronic Bloating',
            'Antenatal, Postnatal & Kids Growth Diet',
          ],
        },
      ],
    },
    synergySection: {
      eyebrow: 'THE 360° INTEGRATIVE ADVANTAGE',
      title: 'Why Treating Mind, Spine, Immunity & Gut Together Works Faster',
      subtitle:
        'Conventional care sends you to 4 different specialists. At Dr. Gauri Joshi’s Homoeo Care in Rahatani, your care plan connects every dot.',
      cards: [
        {
          title: 'Protocol 01 • Screen Migraine & Cervical Pain',
          combo: 'Acupuncture + Homoeopathy + Counseling',
          desc: 'Acupuncture releases occipital and neck nerve tension, Homoeopathy stops recurring migraine triggers at the root, and stress-coaching prevents tension flare-ups.',
        },
        {
          title: 'Protocol 02 • PCOD, Thyroid & Stubborn Weight',
          combo: 'Homoeopathy + Clinical Nutrition + Counseling',
          desc: 'Constitutional Homoeopathy nudges endocrine balance naturally, targeted low-GI Indian nutrition reverses insulin resistance, and counseling steadies mood swings.',
        },
        {
          title: 'Protocol 03 • Gut IBS, Acidity & Sleep Burnout',
          combo: 'Clinical Nutrition + Homoeopathy + Acupressure',
          desc: 'Because the gut-brain axis is wired together, calming vagus-nerve stress while healing the gut lining resolves both chronic acidity and broken sleep.',
        },
      ],
    },
    conditionFinder: {
      eyebrow: 'INTERACTIVE SYMPTOM EXPLORER',
      title: 'What Are You Seeking Support For Today?',
      subtitle:
        'Select a category below to see how Dr. Gauri Joshi combines her 5 specialties into a personalized roadmap for you.',
      recommendedPillarsLabel: 'Recommended Integrative Combination:',
      consultBtnLabel: 'Book Consultation for',
      categories: [
        {
          id: 'pain',
          title: 'Tech-Neck, Spine, Joints & Migraines',
          icon: 'Activity',
          pillars: ['Acupuncture', 'Acupressure', 'Homoeopathy'],
          summary:
            'Lasting, drug-free relief from desk-related spinal compression, joint stiffness, and throbbing migraines without stomach-damaging painkillers.',
          symptoms: [
            'Cervical Spondylosis & Stiff Tech-Neck',
            'Lower Back Pain, Sciatica & Disc Bulge',
            'Screen-Induced Migraines & Sinus Headaches',
            'Knee Osteoarthritis & Frozen Shoulder',
            'Wrist / Carpal Tunnel & Heel Pain',
          ],
          approach:
            'We pair targeted Acupuncture/Acupressure sessions for immediate nerve and myofascial decompression with deep-acting Homoeopathic remedies that reduce chronic inflammation.',
        },
        {
          id: 'mind',
          title: 'Work Stress, Anxiety & Sleep Reset',
          icon: 'Brain',
          pillars: ['Counseling', 'Homoeopathy', 'Acupuncture'],
          summary:
            'Switch off mental overdrive, overcome burnout, and restore deep restorative sleep in a strictly confidential setting.',
          symptoms: [
            'High-Functioning Anxiety & Constant Overthinking',
            'Insomnia, Late-Night Waking & Unrefreshing Sleep',
            'IT Burnout, Brain Fog & Emotional Exhaustion',
            'Relationship, Marital & Family Stress',
            'Academic Pressure & Confidence in Teens',
          ],
          approach:
            '1-on-1 Psychological Counseling equips you with practical cognitive tools, while gentle Homoeopathy and calming meridian therapy regulate cortisol and sleep naturally.',
        },
        {
          id: 'women',
          title: "Women's Health, PCOD & Thyroid",
          icon: 'Heart',
          pillars: ['Homoeopathy', 'Clinical Nutrition', 'Counseling'],
          summary:
            'Root-cause hormonal harmony for every stage—without relying on synthetic hormone pills that merely mask irregular cycles.',
          symptoms: [
            'PCOD / PCOS & Irregular or Painful Periods',
            'Hypothyroidism & Hormonal Weight Gain',
            'Severe PMS, Hormonal Acne & Hair Thinning',
            'Perimenopause, Hot Flushes & Mood Shifts',
            'Postpartum Recovery & Lactation Nutrition',
          ],
          approach:
            'Constitutional Homoeopathy naturally restores ovarian-thyroid axis balance, supported by a practical hormone-friendly Clinical Nutrition plan.',
        },
        {
          id: 'gut',
          title: 'Gut Health, Fatty Liver & Weight',
          icon: 'Apple',
          pillars: ['Clinical Nutrition', 'Homoeopathy', 'Acupressure'],
          summary:
            'Heal erratic digestion, acidity, bloating, and sedentary metabolic slowdown with sustainable Indian nutrition and homoeopathy.',
          symptoms: [
            'Chronic Acidity, Reflux (GERD) & Bloating',
            'IBS (Irritable Bowel) & Constipation',
            'Grade 1/2 Fatty Liver & High Triglycerides',
            'Sustainable Weight Loss & Inch Loss',
            'Vitamin B12, Vitamin D & Iron Deficiencies',
          ],
          approach:
            'Realistic home-cooked nutrition plans repair your gut microbiome and liver metabolism while Homoeopathy corrects sluggish digestive enzymes.',
        },
        {
          id: 'skin',
          title: 'Skin, Hair Fall & Sinus Allergies',
          icon: 'Sparkles',
          pillars: ['Homoeopathy', 'Clinical Nutrition'],
          summary:
            'Clear stubborn skin flares and Pune dust/weather allergies from within—without steroid creams or drowsy antihistamines.',
          symptoms: [
            'Morning Sneezing (Allergic Rhinitis) & Sinusitis',
            'Chronic Urticaria (Hives), Eczema & Psoriasis',
            'Adult Hormonal Acne & Pigmentation',
            'Diffuse Hair Fall, Alopecia & Dandruff',
            'Dust, Pollen & Weather-Change Bronchitis',
          ],
          approach:
            'Internal Homoeopathic treatment calms hyper-reactive histamine responses, paired with anti-inflammatory gut and skin nutrition.',
        },
        {
          id: 'child',
          title: 'Child Immunity, Growth & Care',
          icon: 'Smile',
          pillars: ['Homoeopathy', 'Clinical Nutrition', 'Counseling'],
          summary:
            'Gentle, sweet remedies children love—helping Rahatani & Pune parents break the cycle of monthly antibiotics.',
          symptoms: [
            'Frequent Daycare/School Cold, Cough & Fever',
            'Enlarged Tonsils, Adenoids & Wheezing',
            'Picky Eating, Low Appetite & Slow Growth',
            'Screen Addiction, Irritability & Exam Focus',
            'Digestive Sensitivity & Bedwetting',
          ],
          approach:
            'Constitutional Homoeopathic globules strengthen baseline respiratory and gut immunity, alongside practical kid-friendly nutrition tips for parents.',
        },
      ],
    },
    aboutSection: {
      eyebrow: 'MEET YOUR INTEGRATIVE HEALER IN RAHATANI',
      title: 'Dr. Gauri Joshi',
      subtitle: 'Bridging Classical Healing Wisdom with Modern Lifestyle Medicine',
      paragraphs: [
        'Practicing in the heart of Rahatani, Pune, Dr. Gauri Joshi understands the fast-paced lives of modern professionals and families. She noticed that patients often bounce between multiple clinics—taking painkillers for neck pain, antacids for stress-gut, and sleeping pills for burnout—without anyone connecting the whole picture.',
        'At Dr. Gauri Joshi’s Homoeo Care, she brings five distinct yet deeply connected disciplines together: Classical Homoeopathy, Acupuncture, Acupressure, Psychological Counseling, and Clinical Nutrition. Every consultation is unhurried, empathetic, and focused on getting you back to peak energy naturally.',
      ],
      highlights: [
        {
          title: 'Unhurried 30–40 Min Deep-Dive Consultations',
          desc: 'We listen to your complete health story, work routine, sleep, and emotional stressors—never rushing you out in 3 minutes.',
        },
        {
          title: 'Work-Friendly Evening Slots & Video Follow-Ups',
          desc: 'Convenient weekday evening hours (6:00 PM – 8:00 PM) at Kokane Chowk, Rahatani, so your treatment fits around your sprint calendar.',
        },
        {
          title: 'Zero Drowsiness & Safe Alongside Regular Meds',
          desc: 'Our natural protocols keep your mind sharp for work and safely complement any ongoing conventional medications.',
        },
      ],
    },
    journeySection: {
      eyebrow: 'SIMPLE 3-STEP PROCESS',
      title: 'Your First Visit Experience',
      subtitle: 'Structured, transparent, and designed around your comfort.',
      steps: [
        {
          step: '01',
          title: '360° Root-Cause Assessment',
          desc: 'We map your physical symptoms, posture/pain triggers, gut health, sleep quality, and stress levels in a calm setting.',
        },
        {
          step: '02',
          title: 'Custom Multi-Modality Roadmap',
          desc: 'Receive your tailored care plan—whether single-modality Homoeopathy or integrated with Acupuncture, Counseling, or Nutrition.',
        },
        {
          step: '03',
          title: 'Steady Recovery & WhatsApp Support',
          desc: 'Experience progressive relief with structured follow-ups and easy WhatsApp check-ins whenever you have a question.',
        },
      ],
    },
    testimonialsSection: {
      eyebrow: 'COMMUNITY TRUST IN RAHATANI & PUNE',
      title: 'What Professionals & Families Say',
      subtitle: 'Real recovery stories across Homoeopathy, Acupuncture, Counseling, and Clinical Nutrition.',
      items: [
        {
          name: 'Rohan K. • Senior Software Engineer, Hinjewadi',
          tag: 'Acupuncture + Homoeopathy (Cervical & Migraine)',
          quote:
            'Long hours on dual monitors gave me severe cervical pain and weekly migraines. Just a few sessions of Acupuncture and Homoeopathy with Dr. Gauri in Rahatani relieved my neck stiffness without making me drowsy at work.',
        },
        {
          name: 'Snehal & Vikram P. • Rahatani, Pune',
          tag: 'Homoeopathy + Nutrition (PCOD & Child Immunity)',
          quote:
            'Dr. Gauri ma’am treats our entire family. Her practical home-cooked nutrition plan and homoeopathy regularized my PCOD cycles, and our 5-year-old’s recurring tonsil infections have reduced drastically!',
        },
        {
          name: 'Ankita D. • Product Manager, Wakad',
          tag: 'Psychological Counseling + Stress Reset',
          quote:
            'I visited during a phase of intense work burnout and insomnia. Dr. Gauri’s counseling sessions are so warm, structured, and non-judgmental. Having counseling and holistic care in one place is a blessing.',
        },
      ],
    },
    faqSection: {
      eyebrow: 'CLEAR ANSWERS',
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Where is the clinic located, and is it easy to reach from Wakad, Pimple Saudagar, or Hinjewadi?',
          a: 'Yes! Dr. Gauri Joshi’s Homoeo Care is centrally located in Rahatani, Pune—just minutes away from Pimple Saudagar, Wakad, Kalewadi, and Pimple Nilakh, at 102, Veer Arcade, Kokane Chowk—with weekday evening timings (6:00 PM – 8:00 PM) for professionals returning from Hinjewadi or Baner.',
        },
        {
          q: 'Do I have to take all 5 therapies, or can I book for just one specific service?',
          a: 'You can consult for any single service—such as only Homoeopathy, only Acupuncture, only Counseling, or only Clinical Nutrition. If combining modalities can speed up your recovery, Dr. Gauri will explain why and let you choose comfortably.',
        },
        {
          q: 'Will Homoeopathic medicines or Acupuncture make me sleepy during office / WFH hours?',
          a: 'Not at all. Our remedies cause zero drowsiness or brain fog. In fact, most IT professionals report better daytime focus and deeper nighttime sleep.',
        },
        {
          q: 'Is Acupuncture painful or unsafe?',
          a: 'Clinical acupuncture uses ultra-fine, hair-thin, sterile single-use disposable needles. Most patients feel only a gentle warmth or deep relaxation. If you prefer zero needles, we offer non-invasive Acupressure.',
        },
        {
          q: 'Are Psychological Counseling sessions strictly confidential?',
          a: '100% confidential. Every counseling session—whether in-clinic in Rahatani or via online video—is conducted in complete privacy with zero judgment.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'BOOK YOUR SLOT IN RAHATANI OR ONLINE',
      title: 'Ready to Feel Your Best Again?',
      subtitle:
        'Pick your preferred slot below and confirm instantly via WhatsApp, or call the clinic directly.',
      formTitle: '1-Minute Appointment Request',
      formSubtitle: 'No waiting rooms. Pre-book your morning, post-work evening, or video slot.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g., Rohan Kulkarni',
      phoneLabel: 'Mobile / WhatsApp Number',
      phonePlaceholder: 'e.g., 98765 43210',
      serviceLabel: 'Select Consultation Type',
      serviceOptions: [
        'Homoeopathy Consultation',
        'Acupuncture / Acupressure (Pain & Spine)',
        'Psychological Counseling Session',
        'Clinical Nutrition & Diet Blueprint',
        'IT Desk-Life Reset (Neck/Back/Stress/Gut)',
        'Complete Holistic Assessment (Not Sure)',
      ],
      timeLabel: 'Preferred Slot',
      timeOptions: [
        'Weekday Evening Slot (6:00 PM – 8:00 PM)',
        'Weekday Morning Slot (11:00 AM – 2:00 PM)',
        'Saturday Slot (11:00 AM – 2:00 PM)',
        'Online Video Consultation (WFH Friendly)',
      ],
      messageLabel: 'Brief Health Concern (Optional)',
      messagePlaceholder: 'e.g., Cervical neck pain from laptop work, PCOD, anxiety, or child immunity...',
      submitWhatsappBtn: 'Confirm Slot via WhatsApp',
      submitCallbackBtn: 'Request a Clinic Callback',
      privacyNote: '100% Confidential • Zero Spam • Direct Consultation with Dr. Gauri Joshi',
      callbackSuccess:
        'Thank you! Your slot request is noted. For instant confirmation, tap the WhatsApp button above.',
      clinicCardTitle: 'Visit Us in Rahatani, Pune',
      hoursHeading: 'Clinic Consultation Hours',
      addressHeading: 'Rahatani Clinic Location',
      openMapsBtn: 'Get Directions on Google Maps',
    },
    footer: {
      tagline:
        'Integrative healing in Rahatani, Pune through Classical Homoeopathy, Acupuncture, Acupressure, Counseling & Clinical Nutrition.',
      rights: "Dr. Gauri Joshi's Homoeo Care, Rahatani, Pune. All rights reserved.",
    },
  },

  mr: {
    nav: {
      home: 'मुख्य पृष्ठ',
      itWellness: 'आयटी व जीवनशैली',
      services: '५ उपचार पद्धती',
      conditions: 'आजार व उपचार',
      about: 'डॉ. गौरी जोशी',
      stories: 'अभिप्राय',
      faq: 'शंका समाधान',
      contact: 'अपॉइंटमेंट घ्या',
      switchLangLabel: 'English',
      switchLangTooltip: 'Switch to English',
    },
    hero: {
      locationTag: 'रहाटणी, पुणे • पिंपळे सौदागर, वाकड व हिंजवडीसाठी मध्यवर्ती ठिकाण',
      workFriendlyBadge: 'ऑफिसनंतर संध्याकाळची वेळ (सायं. ६–८, सोम–शुक्र)',
      marathiBadge: 'डॉ. गौरी जोशी यांचे होमिओ केयर',
      clinicTitlePrefix: "Dr. Gauri Joshi's",
      clinicTitleHighlight: 'Homoeo Care',
      signboardPillars: [
        'होमिओपॅथी',
        'ॲक्युप्रेशर',
        'समुपदेशन',
        'ॲक्युपंक्चर',
        'क्लिनिकल न्यूट्रिशन',
      ],
      headline: 'पुण्यातील धकाधकीच्या जीवनशैलीत शरीर, मन आणि आरोग्यासाठी मुळापासून नैसर्गिक उपचार',
      subheadline:
        'लॅपटॉपसमोर बसून होणारी मान-पाठदुखी, कामाचा ताण व निद्रानाश, PCOD, पचनाच्या तक्रारी किंवा मुलांची रोगप्रतिकारशक्ती—रहाटणी, पुणे येथे एकाच छताखाली ५ शास्त्रीय उपचार पद्धतींचा अनुभव घ्या.',
      quickPromptLabel: 'तुम्हाला कोणत्या समस्येवर उपाय हवा आहे? (क्लिक करा):',
      quickChips: [
        { id: 'pain', emoji: '💻', label: 'मानदुखी, पाठदुखी व मायग्रेन' },
        { id: 'mind', emoji: '🧠', label: 'कामाचा ताण, चिंता व झोप' },
        { id: 'women', emoji: '🌸', label: 'PCOD, थायरॉईड व हार्मोन्स' },
        { id: 'gut', emoji: '🥗', label: 'पित्त, फॅटी लिव्हर व वजन' },
        { id: 'skin', emoji: '✨', label: 'त्वचारोग, केसगळती व ॲलर्जी' },
        { id: 'child', emoji: '👶', label: 'लहान मुलांची प्रतिकारशक्ती' },
      ],
      primaryCta: 'व्हॉट्सॲपवर वेळ निश्चित करा',
      secondaryCta: 'अपॉइंटमेंट फॉर्म भरा',
      callCta: 'क्लिनिकला कॉल करा',
      stats: [
        { value: '५-इन-१', label: 'समग्र उपचार एकाच ठिकाणी' },
        { value: '१००%', label: 'झोप किंवा गुंगी न येणारी औषधे' },
        { value: 'सायं. ६–८', label: 'नोकरदारांसाठी संध्याकाळची वेळ' },
      ],
    },
    itWellnessSection: {
      eyebrow: 'रहाटणी, वाकड, पिंपळे सौदागर व हिंजवडीतील आयटी व्यावसायिकांसाठी विशेष',
      title: 'तासनतास कॉम्प्युटरसमोर काम करताय? मणका, पचन आणि मनाला द्या नैसर्गिक ऊर्जा.',
      subtitle:
        'कामाच्या वेळापत्रकात आपल्या आरोग्याकडे दुर्लक्ष होऊ देऊ नका. कोणतेही दुष्परिणाम किंवा गुंगी न येता तुमच्या दिनचर्येत सहज बसणारे उपचार.',
      cards: [
        {
          tag: 'ॲक्युपंक्चर + ॲक्युप्रेशर',
          badge: 'पेनकिलरशिवाय आराम',
          title: 'टेक-नेक (मानदुखी), सायटिका आणि स्क्रीन मायग्रेन',
          desc: 'सतत लॅपटॉपवर काम केल्याने मान, खांदे आणि पाठीच्या मणक्यावर येणारा ताण व दबलेल्या नसा ॲक्युपंक्चर व ॲक्युप्रेशरने मोकळ्या होतात—रोज पेनकिलर घेण्याची गरज नाही.',
          metrics: ['३०–४० मिनिटांचे सेशन', 'कामावर कोणताही थकवा नाही'],
          ctaService: 'ॲक्युपंक्चर / ॲक्युप्रेशर उपचार',
        },
        {
          tag: 'समुपदेशन + होमिओपॅथी',
          badge: '१००% गोपनीय संवाद',
          title: 'कामाचा ताण (Burnout), अतिविचार आणि निद्रानाश',
          desc: 'रात्री उशिरापर्यंतच्या मीटिंग्स आणि डेडलाईन्समुळे झोप लागत नाही का? गोपनीय मानसशास्त्रीय समुपदेशन आणि सौम्य होमिओपॅथिक औषधांनी झोपेच्या गोळ्यांशिवाय शांत झोप मिळवा.',
          metrics: ['सवय न लागणारी सुरक्षित औषधे', 'क्लिनिक किंवा व्हिडिओ सेशन'],
          ctaService: 'मानसशास्त्रीय समुपदेशन (Counseling)',
        },
        {
          tag: 'क्लिनिकल न्यूट्रिशन + होमिओपॅथी',
          badge: 'घरगुती भारतीय आहार',
          title: 'बैठ्या कामामुळे वाढणारे वजन, फॅटी लिव्हर, पित्त व PCOD',
          desc: 'अवेळी जेवण आणि ताणामुळे बिघडलेले पचन व हार्मोन्स सुधारण्यासाठी ऑफिस टिफिन आणि WFH साठी सोपा असलेला भारतीय डाएट प्लॅन व होमिओपॅथी.',
          metrics: ['क्रॅश डाएट नाही', 'पचन व मेटाबॉलिझम सुधारणा'],
          ctaService: 'क्लिनिकल न्यूट्रिशन (आहार नियोजन)',
        },
        {
          tag: 'लहान मुलांसाठी होमिओपॅथी + पोषण',
          badge: 'पालकांची पहिली पसंती',
          title: 'शाळा व डे-केअरमधील मुलांसाठी रोगप्रतिकारशक्ती कवच',
          desc: 'दर महिन्याला होणारी सर्दी-खोकला, टॉन्सिल्स आणि अँटीबायोटिक्सचा मारा थांबवा. गोड होमिओपॅथिक गोळ्यांनी मुलांची नैसर्गिक प्रतिकारशक्ती आतून मजबूत करा.',
          metrics: ['मुलांना आवडणाऱ्या गोड गोळ्या', 'दीर्घकालीन रोगप्रतिकारशक्ती'],
          ctaService: 'होमिओपॅथी सल्ला (Homoeopathy)',
        },
      ],
    },
    servicesSection: {
      eyebrow: 'आमच्या ५ विशेष उपचार पद्धती',
      title: 'संपूर्ण आरोग्यासाठी पाच पूरक उपचार शास्त्रे',
      subtitle:
        'जेव्हा शारीरिक लक्षणे, शरीरातील ऊर्जा प्रवाह, मानसिक शांतता आणि योग्य आहार या सर्वांवर एकत्रित काम केले जाते, तेव्हा आजार मुळापासून बरा होतो.',
      bookThisService: 'यासाठी वेळ घ्या:',
      whatToExpectLabel: 'याचे मुख्य फायदे:',
      conditionsLabel: 'कोणत्या समस्यांसाठी उपयुक्त:',
      items: [
        {
          id: 'homoeopathy',
          icon: 'Sparkles',
          badge: 'मुळापासून व सुरक्षित उपचार',
          title: 'शास्त्रीय होमिओपॅथी (Homoeopathy)',
          marathiTitle: 'Classical Homoeopathy',
          shortDesc:
            'तुमच्या शारीरिक आणि मानसिक प्रकृतीचा सखोल अभ्यास करून कोणतीही गुंगी किंवा दुष्परिणाम न होता आजार मुळापासून बरा करणारी नैसर्गिक उपचार पद्धती.',
          detailDesc:
            'लक्षणे केवळ तात्पुरती न दाबता शरीराची नैसर्गिक रोगप्रतिकारशक्ती वाढवून जुनाट व वारंवार होणारे आजार बरे केले जातात.',
          benefits: [
            'जुनाट ॲलर्जी, त्वचारोग आणि हार्मोन्सच्या आजारांवर मुळापासून उपचार',
            'दिवसा झोप किंवा सुस्ती येत नाही—ऑफिसच्या कामात पूर्ण एकाग्रता राहते',
            'लहान मुले, गर्भवती महिला आणि ज्येष्ठ नागरिकांसाठी पूर्णपणे सुरक्षित',
          ],
          conditions: [
            'सर्दी-शिंकांची ॲलर्जी (Rhinitis), सायनस व दमा',
            'PCOD, थायरॉईड आणि संप्रेरकांचे असंतुलन',
            'एक्झिमा, सोरायसिस, मुरुमे आणि केस गळणे',
            'मुलांचे वारंवार होणारे सर्दी-खोकला आणि टॉन्सिल्स',
          ],
        },
        {
          id: 'acupuncture',
          icon: 'Activity',
          badge: 'मणका व नसांच्या वेदनांवर आराम',
          title: 'क्लिनिकल ॲक्युपंक्चर (Acupuncture)',
          marathiTitle: 'Meridian Pain Therapy',
          shortDesc:
            'अतिशय बारीक व निर्जंतुक सुयांच्या साहाय्याने जुनाट मानदुखी, पाठदुखी, सायटिका, मायग्रेन आणि नसांच्या वेदनांवर प्रभावी विना-औषध उपचार.',
          detailDesc:
            'शरीरातील विशिष्ट ऊर्जा बिंदूंवर (Meridian Points) उपचार करून रक्ताभिसरण सुधारले जाते, नसांची सूज कमी होते आणि शरीराला नैसर्गिक वेदनामुक्ती मिळते.',
          benefits: [
            'पेनकिलर गोळ्यांशिवाय जुनाट मणका व सांधेदुखीपासून आराम',
            'मानसिक ताण कमी करून शांत व गाढ झोप लागण्यास मदत',
            'रक्ताभिसरण आणि दबलेल्या नसांचे कार्य सुधारते',
          ],
          conditions: [
            'मानदुखी (Cervical / Tech-Neck) आणि खांदेदुखी',
            'कंबरदुखी, सायटिका (Sciatica) आणि स्लिप डिस्क',
            'मायग्रेन आणि स्क्रीनमुळे होणारी डोकेदुखी',
            'गुडघेदुखी, संधिवात आणि फ्रोझन शोल्डर',
          ],
        },
        {
          id: 'acupressure',
          icon: 'HandHeart',
          badge: '१००% विना-सुई नैसर्गिक उपचार',
          title: 'थेराप्युटिक ॲक्युप्रेशर (Acupressure)',
          marathiTitle: 'Reflex & Marma Point Care',
          shortDesc:
            'कोणत्याही सुईचा वापर न करता शरीरातील महत्त्वाच्या रिफ्लेक्स बिंदूंवर योग्य दाब देऊन स्नायूंचा ताण, थकवा आणि वेदना दूर करणे.',
          detailDesc:
            'ज्या रुग्णांना सुईची भीती वाटते, तसेच लहान मुले आणि ज्येष्ठ नागरिकांसाठी ही अत्यंत आरामदायी आणि परिणामकारक उपचार पद्धती आहे.',
          benefits: [
            'पूर्णपणे विना-सुई (Non-invasive) आणि अत्यंत रिलॅक्सिंग',
            'मानेची व पाठीची आखडण, थकवा आणि जडपणा त्वरित कमी होतो',
            'पचनक्रिया, सायनस आणि रक्ताभिसरण सुधारण्यास मदत',
          ],
          conditions: [
            'मान, पाठ आणि खांद्याची आखडण',
            'ताणतणावामुळे येणारा शारीरिक व मानसिक थकवा',
            'सायनसचा जडपणा आणि चक्कर येणे (Vertigo)',
            'ज्येष्ठ नागरिकांच्या सांधेदुखीसाठी सौम्य उपचार',
          ],
        },
        {
          id: 'counseling',
          icon: 'HeartHandshake',
          badge: '१००% गोपनीय मानसिक आधार',
          title: 'मानसशास्त्रीय समुपदेशन (Counseling)',
          marathiTitle: 'Psychological Counseling',
          shortDesc:
            'कामाचा ताण, चिंता (Anxiety), अतिविचार, कौटुंबिक/वैवाहिक नातेसंबंध आणि भावनिक अस्वस्थतेवर पूर्णपणे गोपनीय व संवेदनशील मार्गदर्शन.',
          detailDesc:
            'अनेक शारीरिक आजारांचे मूळ मनातील साठलेल्या ताणात असते. डॉ. गौरी जोशी यांच्याशी मोकळेपणाने संवाद साधून मनातील भीती, नैराश्य आणि तणावातून बाहेर पडण्याचा सकारात्मक मार्ग मिळतो.',
          benefits: [
            '१००% गोपनीय, सुरक्षित आणि पूर्वग्रहरहित १-ऑन-१ संवाद',
            'अतिविचार (Overthinking), बर्नआउट आणि चिंतेवर व्यावहारिक उपाय',
            'रहाटणी क्लिनिकमध्ये प्रत्यक्ष किंवा ऑनलाइन व्हिडिओ कॉलद्वारे उपलब्ध',
          ],
          conditions: [
            'कामाचा ताण (Work Burnout) आणि अस्वस्थता',
            'अतिविचार, भीती आणि झोपेच्या तक्रारी',
            'वैवाहिक, कौटुंबिक व नातेसंबंधातील संवाद सुधारणे',
            'विद्यार्थ्यांचा अभ्यासातील ताण आणि करिअरविषयक मार्गदर्शन',
          ],
        },
        {
          id: 'nutrition',
          icon: 'Apple',
          badge: 'वैद्यकीय आहारशास्त्र',
          title: 'क्लिनिकल न्यूट्रिशन (Clinical Nutrition)',
          marathiTitle: 'Therapeutic Diet & Nutrition',
          shortDesc:
            'तुमचा आजार, ब्लड रिपोर्ट्स आणि ऑफिसच्या वेळापत्रकानुसार घरगुती भारतीय जेवणावर आधारित सोपे व शास्त्रीय आहार नियोजन.',
          detailDesc:
            'कोणतेही महागडे सप्लिमेंट्स किंवा उपाशी राहण्याचे (Crash Diet) प्रकार न करता, घरच्या चौरस आहारातूनच वजन नियंत्रण, हार्मोन्सचे संतुलन आणि पचनसंस्थेचे आरोग्य सुधारले जाते.',
          benefits: [
            'आपल्या रोजच्या महाराष्ट्रीयन व भारतीय घरगुती आहारावर आधारित प्लॅन',
            'ऑफिस टिफिन आणि WFH करणाऱ्यांसाठी पाळण्यास अतिशय सोपा',
            'व्हिटॅमिन B12, D3 आणि हिमोग्लोबिनची कमतरता नैसर्गिकरीत्या भरून काढतो',
          ],
          conditions: [
            'आरोग्यपूर्ण वजन कमी करणे आणि फॅटी लिव्हर',
            'PCOS, मधुमेह (Diabetes) आणि थायरॉईडसाठी विशेष आहार',
            'पित्त (Acidity), गॅसेस, बद्धकोष्ठता आणि IBS',
            'गर्भवती महिला, स्तनदा माता व मुलांचे पोषण',
          ],
        },
      ],
    },
    synergySection: {
      eyebrow: '३६०° एकत्रित उपचारांचे वैशिष्ट्य',
      title: 'शरीर, मणका, मन आणि आहार यांवर एकत्र उपचार केल्याने काय फरक पडतो?',
      subtitle:
        'वेगवेगळ्या तक्रारींसाठी ४ ठिकाणी फिरण्यापेक्षा डॉ. गौरी जोशी यांच्या रहाटणी येथील क्लिनिकमध्ये आजाराच्या प्रत्येक मुळावर एकत्रित काम केले जाते.',
      cards: [
        {
          title: 'प्रोटोकॉल ०१ • स्क्रीन मायग्रेन व मानदुखी',
          combo: 'ॲक्युपंक्चर + होमिओपॅथी + समुपदेशन',
          desc: 'ॲक्युपंक्चरने मानेच्या व डोक्याच्या नसांवरील ताण कमी होतो, होमिओपॅथीने मायग्रेन मुळापासून थांबतो आणि ताणतणाव व्यवस्थापनाने पुन्हा त्रास होत नाही.',
        },
        {
          title: 'प्रोटोकॉल ०२ • PCOD, थायरॉईड व वाढणारे वजन',
          combo: 'होमिओपॅथी + क्लिनिकल न्यूट्रिशन + समुपदेशन',
          desc: 'होमिओपॅथीने हार्मोन्सचे नैसर्गिक संतुलन साधले जाते, योग्य भारतीय आहाराने इन्सुलिन रेझिस्टन्स कमी होतो आणि मूड स्विंग्स नियंत्रणात येतात.',
        },
        {
          title: 'प्रोटोकॉल ०३ • जुनाट पित्त, IBS व अपुरी झोप',
          combo: 'क्लिनिकल न्यूट्रिशन + होमिओपॅथी + ॲक्युप्रेशर',
          desc: 'पोट आणि मेंदू यांचा थेट संबंध असतो. योग्य आहार नियोजन, पचन सुधारणारी होमिओपॅथी आणि रिलॅक्सिंग ॲक्युप्रेशरने पित्त व झोप दोन्ही सुधारते.',
        },
      ],
    },
    conditionFinder: {
      eyebrow: 'तक्रारीनुसार उपचार मार्गदर्शक',
      title: 'तुम्हाला कोणत्या समस्येसाठी मार्गदर्शन हवे आहे?',
      subtitle:
        'तुमची समस्या निवडा आणि त्यासाठी डॉ. गौरी जोशी कोणत्या एकत्रित उपचार पद्धतीचा वापर करतात ते पहा.',
      recommendedPillarsLabel: 'शिफारस केलेली एकत्रित उपचार पद्धती:',
      consultBtnLabel: 'या समस्येसाठी अपॉइंटमेंट घ्या:',
      categories: [
        {
          id: 'pain',
          title: 'मानदुखी (Tech-Neck), मणका, सांधेदुखी व मायग्रेन',
          icon: 'Activity',
          pillars: ['ॲक्युपंक्चर', 'ॲक्युप्रेशर', 'होमिओपॅथी'],
          summary:
            'रोजच्या पेनकिलर गोळ्यांचे दुष्परिणाम टाळून जुनाट वेदनांपासून नैसर्गिक व दीर्घकालीन आराम.',
          symptoms: [
            'मानदुखी (Cervical) आणि कंबरदुखी (Lumbar Spondylosis)',
            'सायटिका (Sciatica) आणि स्लिप डिस्कच्या वेदना',
            'लॅपटॉपमुळे होणारा मायग्रेन आणि सायनसची डोकेदुखी',
            'गुडघेदुखी, संधिवात आणि फ्रोझन शोल्डर',
            'मनगटाचे दुखणे (Carpal Tunnel) आणि टाचदुखी',
          ],
          approach:
            'तात्काळ वेदना व स्नायूंची आखडण कमी करण्यासाठी ॲक्युपंक्चर/ॲक्युप्रेशर आणि सांध्यांची व नसांची आतून ताकद वाढवण्यासाठी होमिओपॅथी अशी दुहेरी जोड दिली जाते.',
        },
        {
          id: 'mind',
          title: 'कामाचा ताण, चिंता आणि झोपेच्या तक्रारी',
          icon: 'Brain',
          pillars: ['समुपदेशन', 'होमिओपॅथी', 'ॲक्युपंक्चर'],
          summary:
            'मनातील अस्वस्थता, भीती आणि निद्रानाश दूर करून पुन्हा मानसिक शांतता व आत्मविश्वास मिळवा.',
          symptoms: [
            'सतत अतिविचार (Overthinking) आणि मनाची घालमेल',
            'शांत झोप न लागणे (Insomnia) किंवा रात्री जाग येणे',
            'आयटी वर्क बर्नआउट, थकवा आणि उदासीनता',
            'कौटुंबिक किंवा वैवाहिक नात्यातील तणाव',
            'विद्यार्थ्यांमधील परीक्षेची भीती व एकाग्रतेचा अभाव',
          ],
          approach:
            'वैयक्तिक समुपदेशनातून (Counseling) विचारांना योग्य दिशा दिली जाते, तर सौम्य होमिओपॅथिक औषधे व रिफ्लेक्स बिंदूंच्या मदतीने मनाला नैसर्गिक शांतता मिळते.',
        },
        {
          id: 'women',
          title: 'महिलांचे आरोग्य, PCOD आणि थायरॉईड',
          icon: 'Heart',
          pillars: ['होमिओपॅथी', 'क्लिनिकल न्यूट्रिशन', 'समुपदेशन'],
          summary:
            'किशोरवयापासून ते रजोनिवृत्तीपर्यंत (Menopause) महिलांच्या प्रत्येक टप्प्यावरील समस्यांवर नैसर्गिक व संवेदनशील उपचार.',
          symptoms: [
            'PCOD / PCOS आणि अनियमित मासिक पाळी',
            'थायरॉईड आणि हार्मोन्समुळे वाढणारे वजन',
            'पाळीदरम्यान होणारा तीव्र त्रास, मुरुमे व केसगळती',
            'मेनोपॉजमधील उष्णतेचे झटके (Hot Flushes) व चिडचिड',
            'प्रसूतीनंतरचे आरोग्य व स्तनदा मातांचे पोषण',
          ],
          approach:
            'कृत्रिम हार्मोन्सच्या गोळ्यांशिवाय होमिओपॅथी आणि विशेष आहार नियोजनाच्या मदतीने शरीराचे नैसर्गिक चक्र पूर्ववत केले जाते.',
        },
        {
          id: 'gut',
          title: 'पचनसंस्था, फॅटी लिव्हर आणि वजन नियंत्रण',
          icon: 'Apple',
          pillars: ['क्लिनिकल न्यूट्रिशन', 'होमिओपॅथी', 'ॲक्युप्रेशर'],
          summary:
            'पोटाच्या जुनाट तक्रारी, फॅटी लिव्हर, वजन नियंत्रण आणि चयापचय (Metabolism) सुधारण्यासाठी शाश्वत उपाय.',
          symptoms: [
            'तीव्र ॲसिडिटी, जळजळ आणि जुनाट बद्धकोष्ठता',
            'IBS, पोट फुगणे (Bloating) आणि अपचन',
            'ग्रेड १/२ फॅटी लिव्हर, युरिक ॲसिड व कोलेस्ट्रॉल',
            'आरोग्यपूर्ण पद्धतीने वजन व पोटाचा घेर कमी करणे',
            'व्हिटॅमिन B12, D3 आणि हिमोग्लोबिनची कमतरता',
          ],
          approach:
            'घरगुती भारतीय जेवणावर आधारित क्लिनिकल न्यूट्रिशन प्लॅन आणि यकृत व पचन सुधारणारी होमिओपॅथिक औषधे एकत्र दिली जातात.',
        },
        {
          id: 'skin',
          title: 'त्वचारोग, केसगळती व श्वसनाची ॲलर्जी',
          icon: 'Sparkles',
          pillars: ['होमिओपॅथी', 'क्लिनिकल न्यूट्रिशन'],
          summary:
            'स्टेरॉईड क्रीम्स किंवा गुंगी आणणाऱ्या गोळ्यांशिवाय आतून रोगप्रतिकारशक्ती सुधारून कायमस्वरूपी आराम.',
          symptoms: [
            'सकाळी वारंवार शिंका येणे (Allergic Rhinitis) व सायनस',
            'जुनाट पित्त उठणे (Urticaria), एक्झिमा आणि सोरायसिस',
            'चेहऱ्यावरील मुरुमे (Acne) आणि डाग',
            'केस गळणे, चाई पडणे (Alopecia) आणि कोंडा',
            'धुळीची व हवामानाची ॲलर्जी आणि दमा',
          ],
          approach:
            'होमिओपॅथीने शरीराची अति-संवेदनशीलता (Hypersensitivity) कमी केली जाते आणि योग्य आहाराने रक्तशुद्धी व त्वचा आरोग्य सुधारते.',
        },
        {
          id: 'child',
          title: 'लहान मुलांची रोगप्रतिकारशक्ती व वाढ',
          icon: 'Smile',
          pillars: ['होमिओपॅथी', 'क्लिनिकल न्यूट्रिशन', 'समुपदेशन'],
          summary:
            'वारंवार अँटीबायोटिक्स देण्याची गरज कमी करणारी, मुलांना आवडणारी गोड व सुरक्षित औषधे.',
          symptoms: [
            'डे-केअर/शाळेतील मुलांना वारंवार होणारी सर्दी, खोकला व ताप',
            'वाढलेले टॉन्सिल्स, ॲडेनॉइड्स आणि कफ',
            'भूक न लागणे आणि वजन/उंची न वाढणे',
            'मोबाईल स्क्रीनची सवय, चिडचिडेपणा व एकाग्रता',
            'अंथरूणात लघवी होणे (Bedwetting) व पचनाच्या तक्रारी',
          ],
          approach:
            'सौम्य होमिओपॅथिक गोळ्यांनी मुलांची नैसर्गिक प्रतिकारशक्ती वाढते आणि पालकांना मुलांच्या पोषणाबाबत सोपे मार्गदर्शन मिळते.',
        },
      ],
    },
    aboutSection: {
      eyebrow: 'रहाटणी, पुणे येथील आपल्या समग्र आरोग्य तज्ज्ञ',
      title: 'डॉ. गौरी जोशी',
      subtitle: 'शास्त्रीय उपचार आणि आधुनिक जीवनशैली विज्ञानाची प्रभावी सांगड',
      paragraphs: [
        'रहाटणी, पुणे येथे प्रॅक्टिस करताना डॉ. गौरी जोशी यांनी पाहिले की आजच्या धावपळीच्या व आयटी जीवनशैलीत शारीरिक आणि मानसिक तक्रारी एकमेकांशी जोडलेल्या असतात—लॅपटॉपवरील कामामुळे मानदुखी सुरू होते, कामाच्या ताणाने झोप व पचन बिघडते आणि अवेळी जेवणाने हार्मोन्सचे संतुलन ढासळते.',
        'म्हणूनच रुग्णांना वेगवेगळ्या ठिकाणी फिरण्याऐवजी एकाच शांत व आश्वासक छताखाली परिपूर्ण उपचार मिळावेत या उद्देशाने त्यांनी होमिओपॅथी, ॲक्युपंक्चर, ॲक्युप्रेशर, मानसशास्त्रीय समुपदेशन आणि क्लिनिकल न्यूट्रिशन या पाचही शाखा एकत्र आणल्या आहेत.',
      ],
      highlights: [
        {
          title: '३०–४० मिनिटे सखोल व शांतपणे तपासणी',
          desc: 'घाईगडबडीत २ मिनिटांत प्रिस्क्रिप्शन न देता तुमची दिनचर्या, झोप, आहार आणि मानसिक आरोग्याचा संपूर्ण अभ्यास केला जातो.',
        },
        {
          title: 'ऑफिसनंतर संध्याकाळच्या सोयीच्या वेळा व व्हिडिओ सल्ला',
          desc: 'कोकणे चौक, रहाटणी क्लिनिकमध्ये सोम–शुक्र सायं. ६:०० ते ८:०० ही ऑफिसनंतर सोयीची वेळ.',
        },
        {
          title: 'कोणतीही गुंगी नाही • इतर औषधांसोबत सुरक्षित',
          desc: 'आमच्या उपचारांनी कामावर कोणतीही सुस्ती येत नाही आणि चालू असलेल्या इतर वैद्यकीय औषधांसोबत हे उपचार सुरक्षितपणे घेता येतात.',
        },
      ],
    },
    journeySection: {
      eyebrow: 'उपचारांची सोपी ३-टप्प्यांची पद्धत',
      title: 'तुमच्या पहिल्या भेटीचा अनुभव',
      subtitle: 'स्पष्ट, पारदर्शक आणि तुमच्या सोयीनुसार नियोजित.',
      steps: [
        {
          step: '०१',
          title: '३६०° सखोल आरोग्य मूल्यांकन',
          desc: 'शांत व गोपनीय वातावरणात तुमच्या शारीरिक तक्रारी, कामाची पद्धत, झोप, आहार आणि ताणतणाव यांविषयी सविस्तर चर्चा.',
        },
        {
          step: '०२',
          title: 'वैयक्तिक उपचार रोडमॅप',
          desc: 'तुमच्या गरजेनुसार होमिओपॅथी, ॲक्युपंक्चर/ॲक्युप्रेशर, समुपदेशन किंवा आहार नियोजन यांची अचूक निवड.',
        },
        {
          step: '०३',
          title: 'शाश्वत आराम व व्हॉट्सॲप सपोर्ट',
          desc: 'नियमित फॉलो-अप आणि व्हॉट्सॲपद्वारे सहज संपर्क साधून तुमच्या आरोग्याचा सातत्यपूर्ण पाठपुरावा.',
        },
      ],
    },
    testimonialsSection: {
      eyebrow: 'रहाटणी, पिंपळे सौदागर व वाकडमधील रुग्णांचे अनुभव',
      title: 'व्यावसायिक आणि कुटुंबांचा विश्वास',
      subtitle: 'होमिओपॅथी, ॲक्युपंक्चर, समुपदेशन आणि आहार मार्गदर्शनाचे प्रत्यक्ष परिणाम.',
      items: [
        {
          name: 'रोहन कुलकर्णी • सीनियर सॉफ्टवेअर इंजिनिअर, हिंजवडी',
          tag: 'ॲक्युपंक्चर + होमिओपॅथी (मानदुखी व मायग्रेन)',
          quote:
            'दिवसभर दोन मॉनिटर्ससमोर काम करून मला तीव्र मानदुखी (Cervical) आणि मायग्रेनचा त्रास सुरू झाला होता. रहाटणीतील डॉ. गौरी मॅडमच्या ॲक्युपंक्चर आणि होमिओपॅथीमुळे पेनकिलर न घेता आणि कामावर कोणतीही गुंगी न येता मला उत्तम आराम मिळाला.',
        },
        {
          name: 'स्नेहल आणि विक्रम पाटील • रहाटणी, पुणे',
          tag: 'होमिओपॅथी + आहार नियोजन (PCOD व मुलांची प्रतिकारशक्ती)',
          quote:
            'डॉ. गौरी मॅडम आमच्या संपूर्ण कुटुंबाच्या फॅमिली डॉक्टर आहेत. त्यांच्या घरगुती डाएट प्लॅन आणि होमिओपॅथीने माझी PCOD ची समस्या दूर झाली आणि आमच्या ५ वर्षांच्या मुलाचे वारंवार होणारे टॉन्सिल्सचे त्रासही थांबले.',
        },
        {
          name: 'अंकिता देशमुख • प्रॉडक्ट मॅनेजर, वाकड',
          tag: 'मानसशास्त्रीय समुपदेशन (Work Burnout & Sleep)',
          quote:
            'कामाचा प्रचंड ताण आणि निद्रानाश यामुळे मी खूप खचले होते. मॅडमचे समुपदेशन अतिशय शांत, गोपनीय आणि सकारात्मक दिशा देणारे आहे. एकाच ठिकाणी समुपदेशन आणि नैसर्गिक उपचार मिळणे हे खूप मोठे समाधान आहे.',
        },
      ],
    },
    faqSection: {
      eyebrow: 'नेहमी विचारले जाणारे प्रश्न',
      title: 'तुमच्या मनातील शंकांचे निरसन (FAQ)',
      items: [
        {
          q: 'क्लिनिक रहाटणीमध्ये कुठे आहे? वाकड, पिंपळे सौदागर किंवा हिंजवडीवरून येणे सोयीचे आहे का?',
          a: 'होय! डॉ. गौरी जोशी यांचे होमिओ केयर रहाटणी, पुणे येथे मध्यवर्ती ठिकाणी असून पिंपळे सौदागर, वाकड, काळेवाडी आणि पिंपळे निलख येथून काही मिनिटांच्या अंतरावर आहे. हिंजवडी किंवा बाणेरवरून येणाऱ्या व्यावसायिकांसाठी सोम–शुक्र संध्याकाळी ६:०० ते ८:०० ही सोयीची वेळ उपलब्ध आहे (वीर आर्केड, कोकणे चौक).',
        },
        {
          q: 'मला पाचही उपचार एकत्र घ्यावे लागतात का, की फक्त एका सेवेसाठी येऊ शकतो?',
          a: 'तुम्ही कोणत्याही एका सेवेसाठी (उदा. फक्त होमिओपॅथी, फक्त ॲक्युपंक्चर, फक्त समुपदेशन किंवा फक्त डाएट प्लॅन) नक्कीच येऊ शकता. जर दोन पद्धती एकत्र केल्याने तुम्हाला लवकर फायदा होणार असेल, तर डॉक्टर तुम्हाला तो पर्याय सुचवतात.',
        },
        {
          q: 'होमिओपॅथिक औषधांनी ऑफिसमध्ये किंवा काम करताना झोप/गुंगी येते का?',
          a: 'अजिबात नाही. आमच्या औषधांनी कोणतीही गुंगी किंवा सुस्ती येत नाही. उलट दिवसा कामात चांगला उत्साह राहतो आणि रात्रीची झोप नैसर्गिकरीत्या सुधारते.',
        },
        {
          q: 'ॲक्युपंक्चर करताना दुखते का? ते सुरक्षित आहे का?',
          a: 'ॲक्युपंक्चरसाठी केसासारख्या अतिशय बारीक, निर्जंतुक व एकदाच वापरल्या जाणाऱ्या (Single-use disposable) सुया वापरल्या जातात. बहुतांश रुग्णांना या दरम्यान खूप शांत व रिलॅक्स वाटते. आणि ज्यांना सुई नकोच असेल त्यांच्यासाठी विना-सुई ॲक्युप्रेशर उपलब्ध आहे.',
        },
        {
          q: 'समुपदेशन (Counseling) सत्रातील माहिती गोपनीय राहते का?',
          a: '१००% गोपनीय राहते. डॉ. गौरी जोशी यांच्यासोबत होणारी प्रत्येक चर्चा संपूर्णपणे खाजगी आणि सुरक्षित वातावरणात होते.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'रहाटणी क्लिनिक किंवा ऑनलाइन अपॉइंटमेंट',
      title: 'निरोगी आणि तणावमुक्त आरोग्यासाठी आजच वेळ निश्चित करा',
      subtitle:
        'खालील फॉर्मद्वारे १ मिनिटात व्हॉट्सॲपवर तुमची पसंतीची वेळ बुक करा किंवा थेट कॉल करा.',
      formTitle: 'जलद अपॉइंटमेंट बुकिंग फॉर्म',
      formSubtitle: 'वेटिंग टाळण्यासाठी सकाळची, संध्याकाळची (Post-Work) किंवा व्हिडिओ कन्सल्टेशन वेळ निवडा.',
      nameLabel: 'तुमचे पूर्ण नाव',
      namePlaceholder: 'उदा. रोहन कुलकर्णी',
      phoneLabel: 'मोबाईल / व्हॉट्सॲप क्रमांक',
      phonePlaceholder: 'उदा. 98765 43210',
      serviceLabel: 'कोणत्या उपचारासाठी सल्ला हवा आहे?',
      serviceOptions: [
        'होमिओपॅथी सल्ला (Homoeopathy)',
        'ॲक्युपंक्चर / ॲक्युप्रेशर (मान/पाठ/सांधेदुखी)',
        'मानसशास्त्रीय समुपदेशन (Counseling)',
        'क्लिनिकल न्यूट्रिशन (आहार नियोजन)',
        'आयटी/डेस्क-लाईफ पॅकेज (मानदुखी/ताण/पचन)',
        'संपूर्ण समग्र तपासणी (डॉक्टरांच्या सल्ल्यानुसार)',
      ],
      timeLabel: 'भेटीची पसंतीची वेळ',
      timeOptions: [
        'संध्याकाळची वेळ – ऑफिसनंतर (सायं. ६:०० ते रा. ८:००)',
        'सकाळची वेळ (स. ११:०० ते दु. २:००)',
        'शनिवार (स. ११:०० ते दु. २:००)',
        'ऑनलाइन व्हिडिओ कन्सल्टेशन (WFH सोयीचे)',
      ],
      messageLabel: 'तुमच्या समस्येबद्दल थोडक्यात माहिती (ऐच्छिक)',
      messagePlaceholder: 'उदा. लॅपटॉपमुळे मानदुखी, PCOD, कामाचा ताण किंवा मुलांची प्रतिकारशक्ती...',
      submitWhatsappBtn: 'व्हॉट्सॲपवर अपॉइंटमेंट कन्फर्म करा',
      submitCallbackBtn: 'क्लिनिककडून कॉल बॅकची विनंती करा',
      privacyNote: '१००% गोपनीय • डॉ. गौरी जोशी यांच्याशी थेट व सुरक्षित सल्लामसलत',
      callbackSuccess:
        'धन्यवाद! तुमची विनंती नोंदवली गेली आहे. त्वरित वेळ निश्चित करण्यासाठी व्हॉट्सॲप बटणावर क्लिक करा.',
      clinicCardTitle: 'रहाटणी, पुणे क्लिनिक पत्ता व वेळ',
      hoursHeading: 'क्लिनिकची वेळ',
      addressHeading: 'रहाटणी क्लिनिक लोकेशन',
      openMapsBtn: 'गुगल मॅप्सवर दिशा पहा',
    },
    footer: {
      tagline:
        'रहाटणी, पुणे येथे होमिओपॅथी, ॲक्युपंक्चर, ॲक्युप्रेशर, मानसशास्त्रीय समुपदेशन आणि क्लिनिकल न्यूट्रिशनद्वारे आधुनिक समग्र आरोग्यसेवा.',
      rights: 'डॉ. गौरी जोशी यांचे होमिओ केयर, रहाटणी, पुणे. सर्व हक्क राखीव.',
    },
  },
};
