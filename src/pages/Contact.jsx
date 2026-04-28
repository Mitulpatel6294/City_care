import { useMemo, useState } from 'react';
import { Seo } from '../components/Seo';

const CONTACT = {
  address: '12, Athwa Lines, Near Citylight, Surat - 395007',
  phone: '+91-98765-43210',
  email: 'care@citycarehospital.com',
  whatsappNumber: '919876543210',
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

export function Contact() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = 'Name is required';
    if (!values.phone.trim()) e.phone = 'Phone is required';
    if (values.phone.trim() && values.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number';
    if (!values.email.trim()) e.email = 'Email is required';
    if (values.email.trim() && !validateEmail(values.email)) e.email = 'Enter a valid email address';
    if (!values.message.trim()) e.message = 'Message is required';
    if (!values.preferredTime.trim()) e.preferredTime = 'Preferred time is required';
    return e;
  }, [values]);

  const canSubmit = Object.keys(errors).length === 0;

  async function onSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, message: true, preferredTime: true });
    if (!canSubmit) return;

    setSubmitting(true);
    setSent(false);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    setValues({ name: '', phone: '', email: '', message: '', preferredTime: '' });
    setTouched({});
  }

  const hours = [
    { day: 'Monday', time: 'Open 24 Hours' },
    { day: 'Tuesday', time: 'Open 24 Hours' },
    { day: 'Wednesday', time: 'Open 24 Hours' },
    { day: 'Thursday', time: 'Open 24 Hours' },
    { day: 'Friday', time: 'Open 24 Hours' },
    { day: 'Saturday', time: 'Open 24 Hours' },
    { day: 'Sunday', time: 'Open 24 Hours' },
  ];

  return (
    <>
      <Seo
        title="Contact City Care Hospital Surat | Address, Phone, WhatsApp"
        canonical="https://yourhospital.com/contact"
        ogTitle="Contact City Care Hospital"
        ogDescription="Call, WhatsApp, or send a message. Find directions and opening hours for City Care Hospital in Surat."
      />

      <section className="section">
        <div className="container">
          <div className="pill">
            <strong style={{ color: 'var(--navy)' }}>Contact</strong>
            <span className="p" style={{ margin: 0 }}>
              We respond fast
            </span>
          </div>
          <h1 className="h1" style={{ marginTop: 14 }}>
            Get help now — without waiting
          </h1>
          <p className="p" style={{ marginTop: 12, maxWidth: 920 }}>
            Share your concern and preferred time. If it’s urgent, please visit Emergency OPD or message us on WhatsApp.
          </p>

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
              <div className="h3">Send a message</div>
              <p className="p" style={{ marginTop: 8 }}>
                We’ll reply quickly with guidance and next steps.
              </p>
              <div className="divider" />

              {sent ? <div className="successBox">Message received. Our team will reach out shortly.</div> : null}

              <form onSubmit={onSubmit} style={{ marginTop: 14 }}>
                <div className="formGrid">
                  <div className="field">
                    <div className="label">Name</div>
                    <input
                      className="input"
                      value={values.name}
                      onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    {touched.name && errors.name ? <div className="errorText">{errors.name}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Phone</div>
                    <input
                      className="input"
                      value={values.phone}
                      onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    {touched.phone && errors.phone ? <div className="errorText">{errors.phone}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Email</div>
                    <input
                      className="input"
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                    {touched.email && errors.email ? <div className="errorText">{errors.email}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Preferred Time</div>
                    <select
                      className="select"
                      value={values.preferredTime}
                      onChange={(e) => setValues((v) => ({ ...v, preferredTime: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, preferredTime: true }))}
                    >
                      <option value="">Select</option>
                      <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                      <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                      <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                    {touched.preferredTime && errors.preferredTime ? (
                      <div className="errorText">{errors.preferredTime}</div>
                    ) : null}
                  </div>

                  <div className="field" style={{ gridColumn: '1 / -1' }}>
                    <div className="label">Message</div>
                    <textarea
                      className="textarea"
                      value={values.message}
                      onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                      placeholder="How can we help?"
                    />
                    {touched.message && errors.message ? <div className="errorText">{errors.message}</div> : null}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12, alignItems: 'center' }}>
                  <button className="btn btnPrimary" type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                  <a
                    className="btn btnTeal"
                    href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                      "Hello City Care Hospital, I'd like to get in touch."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Direct
                  </a>
                  {!canSubmit && Object.keys(touched).length > 0 ? (
                    <span className="p" style={{ margin: 0 }}>
                      Please fix highlighted fields.
                    </span>
                  ) : null}
                </div>
              </form>
            </div>

            <div className="grid" style={{ gap: 16 }}>
              <div className="card" style={{ padding: 18 }}>
                <div className="h3">Hospital Details</div>
                <div className="divider" />
                <div className="p" style={{ color: 'rgba(11,18,32,.86)', fontWeight: 750 }}>
                  <div>
                    <strong>Address:</strong> {CONTACT.address}
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <strong>Phone:</strong> {CONTACT.phone}
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <strong>Email:</strong> {CONTACT.email}
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 18 }}>
                <div className="h3">Opening Hours</div>
                <div className="divider" />
                <table className="hoursTable">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day}>
                        <td>{h.day}</td>
                        <td style={{ color: '#0F6E56', fontWeight: 900 }}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <iframe
              title="Google Maps Placeholder"
              className="mapFrame"
              src="https://www.google.com/maps?q=Athwa%20Lines%2C%20Surat%2C%20Gujarat&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

