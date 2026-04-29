import { Seo } from '../components/Seo';
import { DoctorCard } from '../components/DoctorCard';

export function About() {
  const doctors = [
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
  ];

  const awards = [
    { title: 'ISO Certification', year: '2021', note: 'Documented quality and safety processes.' },
    { title: 'NABH Accreditation', year: '2023', note: 'Compliance with national hospital standards.' },
    { title: 'Best Patient Experience', year: '2024', note: 'Local recognition for patient communication and support.' },
  ];

  const facilities = [
    {
      title: 'Reception & Waiting',
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600',
    },
    {
      title: 'ICU & Monitoring',
      img: 'https://images.unsplash.com/photo-1613377512409-59c33c10c821?w=600&auto=format&fit=crop&q=60',
    },
    {
      title: 'Lab & Diagnostics',
      img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600',
    },
    { title: 'Pharmacy', img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600' },
  ];

  return (
    <>
      <Seo
        title="About City Care Hospital Surat | Trusted Doctors & Facilities"
        canonical="https://yourhospital.com/about"
        ogTitle="City Care Hospital — About Us"
        ogDescription="Learn about our mission, vision, senior doctors, awards, and premium infrastructure in Surat."
      />

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>About</strong>
            <span className="p" style={{ margin: 0 }}>
              City Care Hospital
            </span>
          </div>

          <h1 className="h1" style={{ marginTop: 14 }}>
            A hospital built on trust, speed, and clarity
          </h1>
          <p className="p" style={{ marginTop: 12, maxWidth: 820 }}>
            Founded in <strong>2009</strong>, City Care Hospital serves Surat families with senior-doctor oversight,
            clear explanations, and timely care — especially when symptoms feel urgent.
          </p>

          <div className="cardsGrid" style={{ marginTop: 18 }}>
            <div className="card" style={{ padding: 18 }}>
              <div className="h3">Our Story</div>
              <p className="p" style={{ marginTop: 10 }}>
                City Care began as a small clinic in Surat, shaped by one belief: patients deserve urgency and dignity.
                Today we combine senior doctors, diagnostics support, and a clean facility to serve the community.
              </p>
            </div>
            <div className="card" style={{ padding: 18 }}>
              <div className="h3">Mission</div>
              <p className="p" style={{ marginTop: 10 }}>
                To deliver safe, modern, and compassionate healthcare that families can trust — with fast triage,
                clear explanations, and dependable follow-up.
              </p>
            </div>
            <div className="card" style={{ padding: 18 }}>
              <div className="h3">Vision</div>
              <p className="p" style={{ marginTop: 10 }}>
                To be Surat’s most trusted hospital for emergency-ready, specialist-led care — known for quality,
                transparency, and patient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Doctors</strong>
            <span className="p" style={{ margin: 0 }}>
              Credentials & experience
            </span>
          </div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            Senior doctors you can rely on
          </h2>
          <p className="p" style={{ marginTop: 10, maxWidth: 860 }}>
            Doctor credibility matters — each profile lists degree, experience, and affiliations to build trust and transparency.
          </p>

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
            <strong style={{ color: 'var(--navy)' }}>Awards & Certifications</strong>
            <span className="p" style={{ margin: 0 }}>
              Quality signals
            </span>
          </div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            Recognized for safety & patient experience
          </h2>

          <div className="cardsGrid" style={{ marginTop: 16 }}>
            {awards.map((a) => (
              <div key={a.title} className="card cardHover" style={{ padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                  <div style={{ fontWeight: 950, color: 'var(--navy)' }}>{a.title}</div>
                  <div className="chip">{a.year}</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  {a.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Infrastructure</strong>
            <span className="p" style={{ margin: 0 }}>
              Facility highlights
            </span>
          </div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            Clean, modern spaces designed for comfort
          </h2>

          <div className="cardsGrid" style={{ marginTop: 16 }}>
            {facilities.map((f) => (
              <div key={f.title} className="card cardHover" style={{ overflow: 'hidden' }}>
                <img className="infraImg" src={f.img} alt={f.title} />
                <div style={{ padding: 16 }}>
                  <div style={{ fontWeight: 950, color: 'var(--navy)' }}>{f.title}</div>
                  <p className="p" style={{ marginTop: 6 }}>
                    Facility preview for this area.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

