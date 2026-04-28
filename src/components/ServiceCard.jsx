export function ServiceCard({ icon, title, description, expanded, onToggle, details }) {
  return (
    <div
      className="card cardHover serviceCard"
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onToggle();
      }}
      aria-expanded={expanded}
    >
      <div className="serviceTop">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="serviceIcon" aria-hidden="true">
            {icon}
          </div>
          <div>
            <div className="serviceTitle">{title}</div>
            <div className="p serviceDesc">{description}</div>
          </div>
        </div>
        <div style={{ fontWeight: 950, color: 'rgba(10,36,99,.80)' }}>{expanded ? '−' : '+'}</div>
      </div>

      {expanded ? <div className="serviceExpand">{details}</div> : null}
    </div>
  );
}

