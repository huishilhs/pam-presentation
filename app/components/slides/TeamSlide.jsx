const TEAM = [
  { first: 'Cecilia', last: 'Urrutia Martinez', tone: 'blue',   img: '/team/cecilia.jpg', initials: 'CU' },
  { first: 'Huishi',  last: 'Li',                tone: 'green',  img: '/team/huishi.jpg',  initials: 'HL' },
  { first: 'Eklavya', last: 'Gupta',             tone: 'red',    img: '/team/eklavya.jpg', initials: 'EG' },
];

export default function TeamSlide() {
  return (
    <div className="slide-inner">
      <div className="team-header">
        <div className="eyebrow">The team</div>
        <h2 className="team-heading">Group 2.</h2>
      </div>

      <div className="team-grid">
        {TEAM.map((m) => (
          <div key={m.first} className={`team-member team-tone-${m.tone}`}>
            <div className="team-avatar">
              <div className="team-avatar-fallback">{m.initials}</div>
              <img
                src={m.img}
                alt=""
                onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="team-name">
              <span className="team-first">{m.first}</span>
              <span className="team-last">{m.last}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
