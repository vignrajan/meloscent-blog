import { Perfume } from '@/lib/perfumeData';

interface NotesPyramidProps {
  notes: Perfume['notes'];
}

function NotePill({ note }: { note: string }) {
  return (
    <span
      style={{
        fontSize: '12px',
        padding: '3px 10px',
        borderRadius: '20px',
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: '#333',
        border: '1px solid rgba(0,0,0,0.08)',
        whiteSpace: 'nowrap',
        fontWeight: 500,
      }}
    >
      {note}
    </span>
  );
}

interface TierProps {
  label: string;
  notes: string[];
  bgColor: string;
  width: string;
  borderRadius: string;
}

function PyramidTier({ label, notes, bgColor, width, borderRadius }: TierProps) {
  return (
    <div
      style={{
        width,
        margin: '0 auto',
        backgroundColor: bgColor,
        borderRadius,
        padding: '12px 16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <span
          style={{
            fontSize: '9px',
            fontWeight: 700,
            color: '#C9A84C',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            minWidth: '32px',
            paddingTop: '4px',
            flexShrink: 0,
          }}
        >
          {label}
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {notes.map((note) => (
            <NotePill key={note} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NotesPyramid({ notes }: NotesPyramidProps) {
  return (
    <div style={{ width: '100%', marginBottom: '8px' }}>
      <PyramidTier
        label="TOP"
        notes={notes.top}
        bgColor="#FEF9C3"
        width="60%"
        borderRadius="8px 8px 0 0"
      />
      <PyramidTier
        label="HEART"
        notes={notes.heart}
        bgColor="#FEF3C7"
        width="80%"
        borderRadius="0"
      />
      <PyramidTier
        label="BASE"
        notes={notes.base}
        bgColor="#FEE6C7"
        width="100%"
        borderRadius="0 0 8px 8px"
      />
    </div>
  );
}
