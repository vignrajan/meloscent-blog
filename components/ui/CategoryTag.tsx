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

interface CategoryTagProps {
  slug: string;
  name: string;
}

export default function CategoryTag({ slug, name }: CategoryTagProps) {
  const colors = CATEGORY_COLORS[slug] ?? { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' };
  return (
    <span
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        borderRadius: '4px',
        padding: '3px 8px',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </span>
  );
}
