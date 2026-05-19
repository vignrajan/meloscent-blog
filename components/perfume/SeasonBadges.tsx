interface SeasonBadgesProps {
  seasons: string[];
  timeOfDay: string[];
}

const SEASONS = [
  { key: 'spring', label: 'Spring', icon: '🌸' },
  { key: 'summer', label: 'Summer', icon: '☀️' },
  { key: 'fall', label: 'Fall', icon: '🍂' },
  { key: 'winter', label: 'Winter', icon: '❄️' },
] as const;

const TIMES = [
  { key: 'day', label: 'Day', icon: '🌤' },
  { key: 'night', label: 'Night', icon: '🌙' },
] as const;

function Badge({
  icon,
  label,
  active,
}: {
  icon: string;
  label: string;
  active: boolean;
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: active ? '#C9A84C' : '#F5F2EE',
        color: active ? '#0F0D0A' : '#9A9590',
        border: active ? '1px solid #C9A84C' : '1px solid #E8E4DE',
      }}
    >
      <span style={{ fontSize: '14px' }}>{icon}</span>
      {label}
    </span>
  );
}

export default function SeasonBadges({ seasons, timeOfDay }: SeasonBadgesProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8E4DE',
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <h3
        style={{
          fontSize: '12px',
          fontWeight: 700,
          color: '#111111',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: '0 0 12px 0',
        }}
      >
        Best Worn
      </h3>

      {/* Seasons */}
      <div style={{ marginBottom: '10px' }}>
        <p style={{ fontSize: '11px', color: '#9A9590', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Season</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {SEASONS.map(({ key, label, icon }) => (
            <Badge
              key={key}
              icon={icon}
              label={label}
              active={seasons.includes(key as typeof seasons[number])}
            />
          ))}
        </div>
      </div>

      {/* Time of day */}
      <div>
        <p style={{ fontSize: '11px', color: '#9A9590', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Time of Day</p>
        <div style={{ display: 'flex', gap: '6px' }}>
          {TIMES.map(({ key, label, icon }) => (
            <Badge
              key={key}
              icon={icon}
              label={label}
              active={timeOfDay.includes(key as typeof timeOfDay[number])}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
