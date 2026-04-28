import { useMemo, useState } from 'react';
import { Seo } from '../components/Seo';
import { ServiceCard } from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export function Services() {
  const services = useMemo(
    () => [
      {
        icon: '🩺',
        title: 'General Medicine',
        description: 'Primary care for common illnesses and chronic conditions.',
        details:
          'Fever, diabetes, BP, thyroid, infections, stomach issues, and long-term care plans with follow-ups.',
      },
      {
        icon: '🚑',
        title: 'Emergency Care',
        description: '24/7 emergency response with rapid triage.',
        details:
          'Walk in anytime. We prioritize time-critical cases and coordinate diagnostics quickly for faster decisions.',
      },
      {
        icon: '❤️',
        title: 'Cardiology',
        description: 'Heart checkups, ECG, risk profiling, and follow-ups.',
        details:
          'Chest pain evaluation, BP management, preventive screening, and post-treatment monitoring.',
      },
      {
        icon: '👶',
        title: 'Pediatrics',
        description: 'Newborn to teen care with child-friendly consultations.',
        details:
          'Fever, cough, infections, dehydration prevention, growth monitoring, and parental guidance.',
      },
      {
        icon: '🧬',
        title: 'Gynecology',
        description: 'Women’s health, pregnancy care, PCOS, screenings.',
        details:
          'Private consultations, modern screening, pregnancy support, and long-term women’s health planning.',
      },
      {
        icon: '🦴',
        title: 'Orthopedics',
        description: 'Joint pain, fractures, spine pain, sports injury.',
        details:
          'Assessment, imaging coordination, rehab planning, and mobility-focused pain management.',
      },
      {
        icon: '🧪',
        title: 'Pathology / Lab',
        description: 'Routine and specialized lab tests.',
        details:
          'Blood sugar, lipid profile, thyroid, CBC, and more. Clear reporting and clinical correlation.',
      },
      {
        icon: '🩻',
        title: 'Radiology',
        description: 'Imaging support for faster diagnosis.',
        details:
          'X-ray / imaging coordination (placeholder). Fast scheduling and clear guidance on next steps.',
      },
    ],
    []
  );

  const [open, setOpen] = useState('Emergency Care');

  return (
    <>
      <Seo
        title="Services | City Care Hospital Surat — Specialities & Emergency"
        canonical="https://yourhospital.com/services"
        ogTitle="City Care Hospital Services"
        ogDescription="Explore our departments: emergency care, cardiology, pediatrics, gynecology, orthopedics, lab, and radiology."
      />

      <section className="section" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Services</strong>
            <span className="p" style={{ margin: 0 }}>
              Click to expand
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 14 }}>
            <div>
              <h1 className="h1">Departments designed for fast, confident care</h1>
              <p className="p" style={{ marginTop: 12, maxWidth: 900 }}>
                Choose a service to see details. If you need urgent help, book an appointment now or contact emergency OPD.
              </p>
            </div>
            <Link to="/appointment" className="btn btnPrimary">
              Book Appointment
            </Link>
          </div>

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
        </div>
      </section>
    </>
  );
}

