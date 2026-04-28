import { useMemo, useState } from 'react';
import { Seo } from '../components/Seo';

const DEPARTMENTS = [
  'General Medicine',
  'Emergency Care',
  'Cardiology',
  'Pediatrics',
  'Gynecology',
  'Orthopedics',
  'Pathology / Lab',
  'Radiology',
];

const DOCTORS_BY_DEPT = {
  'General Medicine': ['Dr. Sneha Joshi (MBBS)'],
  'Emergency Care': ['On-call Emergency Team'],
  Cardiology: ['Dr. Rajesh Mehta (MD, Cardiology)'],
  Pediatrics: ['Dr. Priya Shah (MBBS, Pediatrics)'],
  Gynecology: ['Dr. Ananya Deshmukh (MS, Gynecology)'],
  Orthopedics: ['Dr. Amit Patel (MS, Orthopedics)'],
  'Pathology / Lab': ['Lab Specialist (Placeholder)'],
  Radiology: ['Radiology Specialist (Placeholder)'],
};

function validatePhone(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  return digits.length >= 10;
}

export function Appointment() {
  const [values, setValues] = useState({
    patientName: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    timeSlot: '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableDoctors = useMemo(() => {
    return values.department ? DOCTORS_BY_DEPT[values.department] || [] : [];
  }, [values.department]);

  const errors = useMemo(() => {
    const e = {};
    if (!values.patientName.trim()) e.patientName = 'Patient name is required';
    if (!values.phone.trim()) e.phone = 'Phone number is required';
    if (values.phone.trim() && !validatePhone(values.phone)) e.phone = 'Enter a valid phone number';
    if (!values.department) e.department = 'Department is required';
    if (!values.doctor) e.doctor = 'Doctor is required';
    if (!values.date) e.date = 'Preferred date is required';
    if (!values.timeSlot) e.timeSlot = 'Time slot is required';
    return e;
  }, [values]);

  const canSubmit = Object.keys(errors).length === 0;

  async function onSubmit(e) {
    e.preventDefault();
    setTouched({
      patientName: true,
      phone: true,
      department: true,
      doctor: true,
      date: true,
      timeSlot: true,
    });
    if (!canSubmit) return;

    setSubmitting(true);
    setSuccess(false);
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setSuccess(true);
    setValues({
      patientName: '',
      phone: '',
      department: '',
      doctor: '',
      date: '',
      timeSlot: '',
      message: '',
    });
    setTouched({});
  }

  return (
    <>
      <Seo
        title="Book Appointment | City Care Hospital Surat — Confirmed Fast"
        canonical="https://yourhospital.com/appointment"
        ogTitle="Book an Appointment — City Care Hospital"
        ogDescription="Fill a simple form and we will call you within 30 minutes to confirm."
      />

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Appointment</strong>
            <span className="p" style={{ margin: 0 }}>
              Confirmed fast
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 14 }}>
            <div>
              <h1 className="h1">Book an appointment in under 60 seconds</h1>
              <p className="p" style={{ marginTop: 12, maxWidth: 920 }}>
                <strong style={{ color: 'rgba(11,18,32,.86)' }}>Only 3 slots available today</strong> — book now to avoid waiting.
              </p>
            </div>
            <div className="badge" style={{ background: 'rgba(255,107,53,.10)', borderColor: 'rgba(255,107,53,.18)' }}>
              Guarantee: Seen within 15 minutes or consultation is free
            </div>
          </div>

          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              marginTop: 16,
              gap: 16,
              alignItems: 'start',
            }}
          >
            <div className="card formCard">
              <div className="h3">Appointment Details</div>
              <p className="p" style={{ marginTop: 8 }}>
                Submit the form and we will call you within <strong>30 minutes</strong> to confirm.
              </p>
              <div className="divider" />

              {success ? (
                <div className="successBox">We will call you within 30 minutes to confirm</div>
              ) : null}

              <form onSubmit={onSubmit} style={{ marginTop: 14 }}>
                <div className="formGrid">
                  <div className="field">
                    <div className="label">Patient Name</div>
                    <input
                      className="input"
                      value={values.patientName}
                      onChange={(e) => setValues((v) => ({ ...v, patientName: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, patientName: true }))}
                      placeholder="Full name"
                      autoComplete="name"
                    />
                    {touched.patientName && errors.patientName ? (
                      <div className="errorText">{errors.patientName}</div>
                    ) : null}
                  </div>

                  <div className="field">
                    <div className="label">Phone Number</div>
                    <input
                      className="input"
                      value={values.phone}
                      onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      placeholder="10-digit mobile number"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                    {touched.phone && errors.phone ? <div className="errorText">{errors.phone}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Department</div>
                    <select
                      className="select"
                      value={values.department}
                      onChange={(e) => {
                        const dept = e.target.value;
                        setValues((v) => ({ ...v, department: dept, doctor: '' }));
                      }}
                      onBlur={() => setTouched((t) => ({ ...t, department: true }))}
                    >
                      <option value="">Select department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    {touched.department && errors.department ? (
                      <div className="errorText">{errors.department}</div>
                    ) : null}
                  </div>

                  <div className="field">
                    <div className="label">Doctor</div>
                    <select
                      className="select"
                      value={values.doctor}
                      onChange={(e) => setValues((v) => ({ ...v, doctor: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, doctor: true }))}
                      disabled={!values.department}
                    >
                      <option value="">{values.department ? 'Select doctor' : 'Select department first'}</option>
                      {availableDoctors.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    {touched.doctor && errors.doctor ? <div className="errorText">{errors.doctor}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Preferred Date</div>
                    <input
                      className="input"
                      type="date"
                      value={values.date}
                      onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, date: true }))}
                    />
                    {touched.date && errors.date ? <div className="errorText">{errors.date}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Time Slot</div>
                    <select
                      className="select"
                      value={values.timeSlot}
                      onChange={(e) => setValues((v) => ({ ...v, timeSlot: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, timeSlot: true }))}
                    >
                      <option value="">Select slot</option>
                      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                      <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                      <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                    </select>
                    {touched.timeSlot && errors.timeSlot ? (
                      <div className="errorText">{errors.timeSlot}</div>
                    ) : null}
                  </div>

                  <div className="field" style={{ gridColumn: '1 / -1' }}>
                    <div className="label">Message (optional)</div>
                    <textarea
                      className="textarea"
                      value={values.message}
                      onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                      placeholder="Symptoms / concern / any notes"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12, alignItems: 'center' }}>
                  <button className="btn btnPrimary" type="submit" disabled={submitting}>
                    {submitting ? 'Submitting…' : 'Submit Appointment'}
                  </button>
                  {!canSubmit && Object.keys(touched).length > 0 ? (
                    <span className="p" style={{ margin: 0 }}>
                      Please fix highlighted fields.
                    </span>
                  ) : (
                    <span className="p" style={{ margin: 0 }}>
                      No backend needed — frontend-only validation.
                    </span>
                  )}
                </div>
              </form>
            </div>

            <aside className="grid" style={{ gap: 16 }}>
              <div className="card" style={{ padding: 18 }}>
                <div className="h3">Why patients book here</div>
                <div className="divider" />
                <div className="p" style={{ color: 'rgba(11,18,32,.86)', fontWeight: 750 }}>
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                    <li>Senior doctor oversight</li>
                    <li>Clear explanations, no confusion</li>
                    <li>Fast triage and premium hygiene</li>
                    <li>Emergency OPD open now</li>
                  </ul>
                </div>
              </div>

              <div className="card" style={{ padding: 18, background: 'rgba(0,180,166,.08)' }}>
                <div style={{ fontWeight: 950, color: 'var(--navy)' }}>Scarcity</div>
                <p className="p" style={{ marginTop: 8, color: 'rgba(11,18,32,.86)', fontWeight: 650 }}>
                  Only 3 slots available today. Booking now reduces waiting and ensures priority scheduling.
                </p>
              </div>

              <div className="card" style={{ padding: 18, background: 'rgba(255,107,53,.06)' }}>
                <div style={{ fontWeight: 950, color: 'var(--navy)' }}>Guarantee</div>
                <p className="p" style={{ marginTop: 8, color: 'rgba(11,18,32,.86)', fontWeight: 650 }}>
                  If you're not seen within 15 minutes of your appointment, your consultation is free.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

