interface NotesPyramidProps {
  notes: { top: string[]; heart: string[]; base: string[] };
}

function NotePill({ note }: { note: string }) {
  return (
    <span
      style={{
        fontSize: '12px',
        padding: '3px 10px',
        borderRadius: '20px',
        backgroundColor: '#FFFFFF',
        color: '#374151',
        border: '1px solid #E5E7EB',
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
        bgColor="#FEF9EE"
        width="60%"
        borderRadius="8px 8px 0 0"
      />
      <PyramidTier
        label="HEART"
        notes={notes.heart}
        bgColor="#FEF3E4"
        width="80%"
        borderRadius="0"
      />
      <PyramidTier
        label="BASE"
        notes={notes.base}
        bgColor="#FEEAD4"
        width="100%"
        borderRadius="0 0 8px 8px"
      />
    </div>
  );
}
