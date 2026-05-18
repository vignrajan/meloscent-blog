'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import type { Author } from '@/lib/mockData';

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div style={{ display: 'flex', gap: '16px', backgroundColor: '#FAF7F2', borderRadius: '10px', padding: '20px', border: '1px solid #E8E4DE', margin: '40px 0' }}>
      <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
        <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover' }} sizes="56px" />
      </div>
      <div>
        <Link href={`/author/${author.slug.current}`} style={{ fontSize: '16px', fontWeight: 600, color: '#111111', textDecoration: 'none', display: 'block', marginBottom: '2px' }}>
          {author.name}
        </Link>
        <p style={{ fontSize: '12px', color: '#9A9590', margin: '0 0 8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{author.specialisation}</p>
        <p style={{ fontSize: '14px', color: '#6B6460', lineHeight: 1.6, margin: 0 }}>{author.bio}</p>
        {author.instagram && (
          <a href={author.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '10px', fontSize: '12px', color: '#9A9590', textDecoration: 'none' }}>
            <Instagram size={14} /> Instagram
          </a>
        )}
      </div>
    </div>
  );
}
