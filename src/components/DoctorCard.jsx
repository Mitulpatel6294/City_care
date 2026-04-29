export function DoctorCard({
  name,
  initials,
  degree,
  specialization,
  experience,
  affiliations,
  consultFor,
  languages,
  imageUrl,
}) {
  return (
    <div className="card cardHover doctorCard">
      <div className="docImg">
        {imageUrl ? (
          <img src={imageUrl} alt={`${name} profile`} />
        ) : (
          <div className="docInitialAvatar" aria-label={`${name} avatar`}>
            {initials || name
              .split(' ')
              .filter(Boolean)
              .slice(0, 2)
              .map((p) => p[0])
              .join('')
              .toUpperCase()}
          </div>
        )}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="docName">{name}</div>
        <div className="p" style={{ marginTop: 6 }}>
          {specialization}
        </div>
        {consultFor ? (
          <div className="p" style={{ marginTop: 6, color: 'rgba(11,18,32,.86)', fontWeight: 700 }}>
            Consult for: {consultFor}
          </div>
        ) : null}
        <div className="docMeta">
          <div className="chip">{degree}</div>
          <div className="chip">{experience}</div>
          <div className="chip">{affiliations}</div>
          {languages ? <div className="chip">Languages: {languages}</div> : null}
        </div>
      </div>
    </div>
  );
}

