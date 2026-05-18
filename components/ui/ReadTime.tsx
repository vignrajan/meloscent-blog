import { Clock } from 'lucide-react';

interface ReadTimeProps {
  minutes: string;
}

export default function ReadTime({ minutes }: ReadTimeProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#9A9590' }}>
      <Clock size={11} />
      {minutes}
    </span>
  );
}
