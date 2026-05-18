interface RatingBarsProps {
  longevity: number;
  sillage: number;
  versatility: number;
}

const DESCRIPTIONS: Record<number, string> = {
  1: 'Poor',
  2: 'Weak',
  3: 'Moderate',
  4: 'Very Good',
  5: 'Outstanding',
};

function RatingRow({ label, value }: { label: string; value: number }) {
  const description = DESCRIPTIONS[value] ?? 'Unknown';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 0',
        borderBottom: '1px solid #F5F2EE',
      }}
    >
      {/* Label */}
      <span
        style={{
          fontSize: '13px',
          color: '#555',
          minWidth: '90px',
          fontWeight: 500,
        }}
      >
        {label}
      </span>

      {/* Circles */}
      <div style={{ display: 'flex', gap: '5px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              display: 'inline-block',
              backgroundColor: i < value ? '#C9A84C' : 'transparent',
              border: i < value ? 'none' : '1.5px solid #C9A84C',
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Description */}
      <span
        style={{
          fontSize: '12px',
          color: '#9A9590',
          marginLeft: '4px',
        }}
      >
        {description}
      </span>
    </div>
  );
}

export default function RatingBars({ longevity, sillage, versatility }: RatingBarsProps) {
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
          margin: '0 0 4px 0',
        }}
      >
        Performance
      </h3>
      <RatingRow label="Longevity" value={longevity} />
      <RatingRow label="Sillage" value={sillage} />
      <div style={{ borderBottom: 'none' }}>
        <RatingRow label="Versatility" value={versatility} />
      </div>
    </div>
  );
}
