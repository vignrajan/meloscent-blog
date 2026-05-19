import { redirect } from 'next/navigation';
import { PERFUMES } from '@/lib/mockPerfumes';

export async function generateStaticParams() {
  return PERFUMES.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function OldPerfumeSlugRedirect({ params }: Props) {
  redirect(`/perfume/${params.slug}`);
}
