import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCard } from '../components/DoctorCard';
import { TestimonialCard } from '../components/TestimonialCard';

const PLACEHOLDER = (w, h, text) =>
  `https://placehold.co/${w}x${h}/0A2463/ffffff?text=${encodeURIComponent(text)}`;

const EMERGENCY_PHONE = '+91-98765-43210';

function useCountUp(target, { durationMs = 1200, startWhenVisible = true } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;
    let startTs = 0;

    const start = () => {
      if (started) return;
      started = true;
      startTs = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTs) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * target));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!startWhenVisible) {
      start();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [target, durationMs, startWhenVisible]);

  return [ref, value];
}

export function Home() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = useMemo(
    () => [
      {
        icon: '🩺',
        title: 'General Medicine',
        description: 'Fever, diabetes, BP, infections, chronic care.',
        details:
          'Same-day consults, evidence-based treatment plans, and clear guidance you can follow at home.',
      },
      {
        icon: '👶',
        title: 'Pediatrics',
        description: "Trusted child care — from newborn to teens.",
        details:
          "Worried about your child's fever at 2AM? We're here with compassionate pediatric care and fast triage.",
      },
      {
        icon: '❤️',
        title: 'Cardiology',
        description: 'Heart checkups, ECG, risk assessment, follow-ups.',
        details:
          'Timely evaluation for chest pain, BP control, and preventive heart health screenings.',
      },
      {
        icon: '🦴',
        title: 'Orthopedics',
        description: 'Joint pain, fractures, sports injury, spine pain.',
        details:
          'Personalized rehab guidance, imaging coordination, and pain management focused on mobility.',
      },
      {
        icon: '🧬',
        title: 'Gynecology',
        description: 'Women’s health, pregnancy care, PCOS, checkups.',
        details:
          'Private, respectful consultations with modern screening and long-term care planning.',
      },
      {
        icon: '🚑',
        title: 'Emergency Care',
        description: '24/7 emergency response with rapid triage.',
        details:
          'Emergency OPD open now — walk in anytime. We prioritize time-critical cases immediately.',
      },
    ],
    []
  );

  const doctors = useMemo(
    () => [
      {
        name: 'Dr. Rajesh Mehta',
        initials: 'RM',
        degree: 'MD',
        specialization: 'Cardiology',
        experience: '20 years experience',
        affiliations: 'Affiliated: NABH Hospitals',
        consultFor: 'chest discomfort, BP control, preventive checkups',
        languages: 'English, Hindi, Gujarati',
      },
      {
        name: 'Dr. Priya Shah',
        initials: 'PS',
        degree: 'MBBS',
        specialization: 'Pediatrics',
        experience: '15 years experience',
        affiliations: 'Member: IAP',
        consultFor: 'child fever/cough, dehydration, growth guidance',
        languages: 'English, Hindi, Gujarati',
      },
      {
        name: 'Dr. Amit Patel',
        initials: 'AP',
        degree: 'MS',
        specialization: 'Orthopedics',
        experience: '18 years experience',
        affiliations: 'Trauma & Sports Medicine',
        consultFor: 'fractures, knee/back pain, sports injuries',
        languages: 'English, Hindi, Gujarati',
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: 'Neha Desai',
        quote: 'The emergency team was calm and fast. We felt safe from the moment we arrived.',
        rating: 5,
        avatarUrl: PLACEHOLDER(100, 100, 'ND'),
      },
      {
        name: 'Rohit Sharma',
        quote: 'Clear diagnosis, no confusion. The doctor explained everything in simple terms.',
        rating: 5,
        avatarUrl: PLACEHOLDER(100, 100, 'RS'),
      },
      {
        name: 'Farhan Khan',
        quote: 'Great pediatric care — my child recovered quickly and we had follow-up support.',
        rating: 5,
        avatarUrl: PLACEHOLDER(100, 100, 'FK'),
      },
    ],
    []
  );

  const [patientsRef, patients] = useCountUp(10000);
  const [doctorsRef, doctorsCount] = useCountUp(15);
  const [hoursRef, hours] = useCountUp(24);

  return (
    <>
      <Seo
        title="City Care Hospital Surat | Best Hospital in Surat | 24/7 Emergency"
        canonical="https://yourhospital.com"
        ogTitle="Best Hospital in Surat — Quality Care You Can Trust"
        ogDescription="Expert doctors, modern facilities, 24/7 emergency care in Surat."
      />

      <section className="hero">
        <div className="container heroGrid">
          <div className="card heroCard">
            <div className="heroTopRow">
              <span className="badge">ISO Certified </span>
              <span className="badge">NABH Accredited </span>
              <span className="badge">Surat, Gujarat</span>
              <span className="badge">Near Citylight, Athwa Lines</span>
            </div>

            <h1 className="h1 heroTitle">
              Your Health, Our Priority — Expert Care in the Heart of Surat
            </h1>
            <p
              className="p"
              style={{ marginTop: 12, fontWeight: 650, color: 'rgba(11,18,32,.86)', maxWidth: 760 }}
            >
              Chest discomfort, fever at night, injury, or ongoing health concerns — we help you understand what’s
              happening and what to do next.
            </p>

            <div className="heroActions">
              <Link to="/appointment" className="btn btnPrimary">
                Book Appointment
              </Link>
              <a className="btn btnGhost" href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}>
                Call Emergency
              </a>
            </div>

            <div className="counterBar" style={{ marginTop: 18 }}>
              <div className="counterBox" ref={patientsRef}>
                <div className="counterNum">{patients.toLocaleString()}+</div>
                <div className="counterLabel">Happy Patients</div>
              </div>
              <div className="counterBox" ref={doctorsRef}>
                <div className="counterNum">{doctorsCount}+</div>
                <div className="counterLabel">Doctors</div>
              </div>
              <div className="counterBox" ref={hoursRef}>
                <div className="counterNum">{hours}/7</div>
                <div className="counterLabel">Available</div>
              </div>
              <div className="counterBox">
                <div className="counterNum" style={{ color: 'var(--teal)' }}>
                  Guarantee
                </div>
                <div className="counterLabel">
                  If you're not seen within 15 minutes of your appointment, your consultation is free
                </div>
              </div>
            </div>

            <div className="localProofStrip">
              <div className="localProofItem">
                Trusted by families across <strong>Athwa, Citylight, Adajan, and nearby Surat areas</strong>.
              </div>
            </div>

            <div className="trustRow" aria-label="Trust badges" style={{ marginTop: 18 }}>
              <div className="trustBadge">
                <div>
                  <div className="trustBadgeStrong">15+ Years</div>
                  <div className="trustBadgeSmall">Experience</div>
                </div>
              </div>
              <div className="trustBadge">
                <div>
                  <div className="trustBadgeStrong">10,000+</div>
                  <div className="trustBadgeSmall">Patients Treated</div>
                </div>
              </div>
              <div className="trustBadge">
                <div>
                  <div className="trustBadgeStrong">24/7</div>
                  <div className="trustBadgeSmall">Emergency</div>
                </div>
              </div>
              <div className="trustBadge">
                <div>
                  <div className="trustBadgeStrong">ISO</div>
                  <div className="trustBadgeSmall">Certified</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="card heroSide">
            <div className="heroSideImage heroSideImageOverlay">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
                alt="City Care Hospital facility"
              />
            </div>
            <div className="heroSideList">
              <div className="heroSideItem">
                <div className="checkDot" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <div style={{ fontWeight: 950, color: 'var(--navy)' }}>Fast triage & clear answers</div>
                  <div className="p" style={{ marginTop: 4 }}>
                    No vague advice — we explain causes, options, and next steps.
                  </div>
                </div>
              </div>
              <div className="heroSideItem">
                <div className="checkDot" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <div style={{ fontWeight: 950, color: 'var(--navy)' }}>Clean, comfortable environment</div>
                  <div className="p" style={{ marginTop: 4 }}>
                    Designed for comfort, privacy, and clear communication.
                  </div>
                </div>
              </div>
              <div className="heroSideItem">
                <div className="checkDot" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <div style={{ fontWeight: 950, color: 'var(--navy)' }}>Family-first care</div>
                  <div className="p" style={{ marginTop: 4 }}>
                    Especially when you’re worried — we treat you like family.
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 16, background: 'rgba(255,107,53,.06)' }}>
              <div style={{ fontWeight: 950, color: 'var(--navy)' }}>Late-night worry?</div>
              <div className="p" style={{ marginTop: 6, color: 'rgba(11,18,32,.86)', fontWeight: 650 }}>
                “Worried about your child’s fever at 2AM? Walk in anytime — we’ll guide you calmly.”
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Services</strong>
            <span className="p" style={{ margin: 0 }}>
              Click any service for details
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, marginTop: 14, flexWrap: 'wrap' }}>
            <h2 className="h2">Care built for real life — not just symptoms</h2>
            <Link to="/services" className="btn btnGhost">
              See all services
            </Link>
          </div>

          <ServicesPreview services={services} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Why Choose Us</strong>
            <span className="p" style={{ margin: 0 }}>
              Trust, speed, and clarity
            </span>
          </div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            Care that feels safe and decisive
          </h2>
          <p className="p" style={{ marginTop: 10 }}>
            Senior doctor oversight and organised processes — so you get clear answers faster, with less stress.
          </p>

          <div className="iconGrid" style={{ marginTop: 16 }}>
            <WhyCard icon="⏱️" title="Fast Consult Flow" text="Quick registration, smart triage, and clear next steps." />
            <WhyCard icon="🧪" title="Diagnostics Support" text="Lab + radiology coordination for faster diagnosis." />
            <WhyCard icon="🛡️" title="Safety Standards" text="Clean facility with careful hygiene practices." />
            <WhyCard icon="🤝" title="Human Care" text="Respectful communication and transparent guidance." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 20, background: 'rgba(10,36,99,.06)' }}>
            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <div className="pill">
                  <strong style={{ color: 'var(--navy)' }}>Emergency</strong>
                  <span className="p" style={{ margin: 0 }}>
                    24/7 walk-in
                  </span>
                </div>
                <h2 className="h2" style={{ marginTop: 14 }}>
                  Emergency OPD — Walk in anytime
                </h2>
                <p className="p" style={{ marginTop: 10, maxWidth: 900 }}>
                  If symptoms feel urgent, come directly to Emergency. We prioritise critical cases first and explain the
                  plan clearly to families.
                </p>
                <div className="p" style={{ marginTop: 10, color: 'rgba(11,18,32,.86)', fontWeight: 750 }}>
                  Chest pain • Breathing difficulty • Severe injury/bleeding • High fever with drowsiness
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a className="btn btnPrimary" href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}>
                  Call Emergency
                </a>
                <Link className="btn btnGhost" to="/contact">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div className="pill">
                <strong style={{ color: 'var(--navy)' }}>Doctors</strong>
                <span className="p" style={{ margin: 0 }}>
                  Credibility you can verify
                </span>
              </div>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Meet our senior specialists
              </h2>
              <p className="p" style={{ marginTop: 10 }}>
                Each doctor brings proven experience, hospital affiliations, and evidence-based practice.
              </p>
            </div>
            <Link to="/appointment" className="btn btnPrimary">
              Book with a Doctor
            </Link>
          </div>

          <div className="doctorsGrid" style={{ marginTop: 16 }}>
            {doctors.map((d) => (
              <DoctorCard key={d.name} {...d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Recovery Stories</strong>
            <span className="p" style={{ margin: 0 }}>
              Before / After
            </span>
          </div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            Realistic outcomes, responsibly shared
          </h2>
          <div className="cardsGrid" style={{ marginTop: 16 }}>
            <StoryCard
              title="Before: Uncontrolled BP + headaches"
              after="After: Stabilized BP within 3 weeks with medication adjustment + lifestyle plan."
              text="We aligned medicines with a simple routine, tracked readings, and checked for risk factors."
            />
            <StoryCard
              title="Before: Child’s high fever at night"
              after="After: Fever managed, dehydration prevented, and follow-up guidance provided."
              text="Fast triage, pediatric evaluation, and clear at-home instructions reduced family anxiety."
            />
            <StoryCard
              title="Before: Knee pain limiting walking"
              after="After: Improved mobility with rehab plan + targeted pain management."
              text="A structured plan, imaging as needed, and monitoring helped avoid unnecessary procedures."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Testimonials</strong>
            <span className="p" style={{ margin: 0 }}>
              5-star patient experience
            </span>
          </div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            Families recommend City Care Hospital
          </h2>
          <div className="testimonialGrid" style={{ marginTop: 16 }}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center' }}>
            <Link to="/appointment" className="btn btnPrimary">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div className="pill">
                <strong style={{ color: 'var(--navy)' }}>Location</strong>
                <span className="p" style={{ margin: 0 }}>
                  Athwa Lines, Surat
                </span>
              </div>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Find us quickly — we’re easy to reach
              </h2>
              <p className="p" style={{ marginTop: 10 }}>
                12, Athwa Lines, Near Citylight, Surat - 395007
              </p>
            </div>
            <Link to="/contact" className="btn btnTeal">
              Contact & Directions
            </Link>
          </div>

          <div style={{ marginTop: 16 }}>
            <iframe
              title="Google Maps"
              className="mapFrame"
              src="https://www.google.com/maps?q=Surat%2C%20Gujarat%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <div className={`stickyBook ${showSticky ? '' : 'stickyBookHide'}`} role="region" aria-label="Sticky appointment bar">
        <div className="stickyBookText">
          <div className="stickyBookTitle">Need a doctor today?</div>
          <div className="stickyBookSub">Book now — we confirm within 30 minutes</div>
        </div>
        <Link to="/appointment" className="btn btnPrimary" style={{ paddingInline: 18 }}>
          Book Appointment
        </Link>
      </div>
    </>
  );
}

function ServicesPreview({ services }) {
  const [open, setOpen] = useState('General Medicine');
  return (
    <div className="cardsGrid" style={{ marginTop: 16 }}>
      {services.map((s) => (
        <ServiceCard
          key={s.title}
          icon={s.icon}
          title={s.title}
          description={s.description}
          details={s.details}
          expanded={open === s.title}
          onToggle={() => setOpen((v) => (v === s.title ? '' : s.title))}
        />
      ))}
    </div>
  );
}

function WhyCard({ icon, title, text }) {
  return (
    <div className="card cardHover iconCard">
      <div className="iconEmoji" aria-hidden="true">
        {icon}
      </div>
      <div className="iconTitle">{title}</div>
      <p className="p">{text}</p>
    </div>
  );
}

function StoryCard({ title, after, text }) {
  return (
    <div className="card cardHover" style={{ padding: 18 }}>
      <div style={{ fontWeight: 950, color: 'var(--navy)' }}>{title}</div>
      <div className="divider" />
      <div style={{ fontWeight: 900, color: 'rgba(11,18,32,.86)' }}>{after}</div>
      <p className="p" style={{ marginTop: 8 }}>
        {text}
      </p>
    </div>
  );
}

