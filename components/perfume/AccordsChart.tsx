import { PerfumeAccord } from '@/lib/perfumeData';

interface AccordsChartProps {
  accords: PerfumeAccord[];
}

export default function AccordsChart({ accords }: AccordsChartProps) {
  const sorted = [...accords].sort((a, b) => b.strength - a.strength);

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
          margin: '0 0 16px 0',
        }}
      >
        Main Accords
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {sorted.map((accord) => (
          <div key={accord.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Name */}
            <span
              style={{
                fontSize: '13px',
                color: '#333',
                minWidth: '90px',
                fontWeight: 500,
              }}
            >
              {accord.name}
            </span>
            {/* Bar container */}
            <div
              style={{
                flex: 1,
                height: '8px',
                backgroundColor: '#F5F2EE',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${accord.strength}%`,
                  backgroundColor: accord.color,
                  borderRadius: '4px',
                  transition: 'width 600ms ease',
                }}
              />
            </div>
            {/* Percentage */}
            <span
              style={{
                fontSize: '11px',
                color: '#9A9590',
                minWidth: '30px',
                textAlign: 'right',
              }}
            >
              {accord.strength}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
