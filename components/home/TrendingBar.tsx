import type { Article } from '@/lib/mockData';

interface TrendingBarProps {
  articles: Article[];
}

export default function TrendingBar({ articles }: TrendingBarProps) {
  const titles = articles.map((a) => a.title);

  return (
    <div style={{
      backgroundColor: '#111111',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      overflow: 'hidden',
    }}>
      <span style={{
        backgroundColor: '#E63946',
        color: '#FFFFFF',
        fontSize: '9px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '2px 8px',
        borderRadius: '2px',
        flexShrink: 0,
      }}>
        Trending
      </span>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 40s linear infinite',
          whiteSpace: 'nowrap',
          fontSize: '13px',
          color: '#F5F0E8',
        }}>
          {titles.join(' · ')} &nbsp;&nbsp;&nbsp; {titles.join(' · ')}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
