export const dynamic = 'force-dynamic';

type AdminPostIdProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostId({ params }: AdminPostIdProps) {
  const { id } = await params;

  return <div className="mb-16">AdminPost {id}</div>;
}
