import { affiliates } from '@/lib/affiliates';

export function GET(_req: Request, { params }: { params: { product: string } }) {
  const url = affiliates[params.product];
  if (!url) return new Response('Not Found', { status: 404 });
  return Response.redirect(url, 301);
}
