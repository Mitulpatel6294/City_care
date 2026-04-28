export function TestimonialCard({ name, quote, rating = 5, avatarUrl }) {
  const stars = Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆'));

  return (
    <div className="card cardHover testimonial">
      <div className="tTop">
        <div className="avatar">
          <img src={avatarUrl} alt={`${name} avatar`} />
        </div>
        <div>
          <div className="tName">{name}</div>
          <div className="stars" aria-label={`${rating} out of 5 stars`}>
            {stars.join('')}
          </div>
        </div>
      </div>
      <div className="divider" />
      <p className="p" style={{ color: 'rgba(11,18,32,.86)', fontWeight: 650 }}>
        “{quote}”
      </p>
    </div>
  );
}

