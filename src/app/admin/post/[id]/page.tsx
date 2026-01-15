import MenagePostForm from '@/components/admin/MenagePostForm';
import { makePublicPostFromDb } from '@/dto/post/dto';
import { findPostByAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Editar Post',
};

type AdminPostIdProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostId({ params }: AdminPostIdProps) {
  const { id } = await params;
  const post = await findPostByAdmin(id).catch(() => null);

  if (!post) notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-x1 font-extrabold">Editar Post</h1>
      <MenagePostForm mode="update" publicPost={publicPost} />
    </div>
  );
}
