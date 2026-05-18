'use client';

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  news:      { bg: '#FEE2E2', text: '#B91C1C', border: '#FECACA' },
  dupes:     { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  celebrity: { bg: '#EDE9FE', text: '#6D28D9', border: '#DDD6FE' },
  arabic:    { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  niche:     { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
  seasonal:  { bg: '#DCFCE7', text: '#166534', border: '#BBF7D0' },
  tiktok:    { bg: '#FFE4E6', text: '#BE123C', border: '#FECDD3' },
  luxury:    { bg: '#FEF9C3', text: '#78350F', border: '#FEF08A' },
};

interface CategoryPillProps {
  slug: string;
  name: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryPill({ slug, name, active = false, onClick }: CategoryPillProps) {
  const colors = CATEGORY_COLORS[slug];

  if (active) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: '#0F0D0A',
          color: '#F5F0E8',
          border: '1.5px solid #0F0D0A',
          borderRadius: '100px',
          padding: '6px 16px',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'all 150ms ease',
        }}
      >
        {name}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors?.bg ?? '#FFFFFF',
        color: colors?.text ?? '#555555',
        border: `1.5px solid ${colors?.border ?? '#E0DDD8'}`,
        borderRadius: '100px',
        padding: '6px 16px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all 150ms ease',
      }}
    >
      {name}
    </button>
  );
}
