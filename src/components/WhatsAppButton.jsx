const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_TEXT = encodeURIComponent(
  "Hello City Care Hospital, I'd like to book an appointment. Please call me back."
);

export function WhatsAppButton() {
  return (
    <a
      className="waFloat waPulse"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      style={{ position: 'fixed' }}
    >
      <span style={{ position: 'relative', zIndex: 1, fontWeight: 950, fontSize: 18 }}>WA</span>
      <span className="srOnly">WhatsApp</span>
    </a>
  );
}

