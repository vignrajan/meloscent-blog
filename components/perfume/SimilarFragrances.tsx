import { Perfume } from '@/lib/perfumeData';
import PerfumeCard from './PerfumeCard';

interface SimilarFragrancesProps {
  perfumes: Perfume[];
}

export default function SimilarFragrances({ perfumes }: SimilarFragrancesProps) {
  if (perfumes.length === 0) return null;

  return (
    <section style={{ marginTop: '40px' }}>
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#111111',
          marginBottom: '20px',
          letterSpacing: '-0.01em',
        }}
      >
        You Might Also Like
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(perfumes.length, 4)}, 1fr)`,
          gap: '16px',
        }}
      >
        {perfumes.slice(0, 4).map((perfume) => (
          <PerfumeCard key={perfume.slug} perfume={perfume} size="small" />
        ))}
      </div>
    </section>
  );
}
