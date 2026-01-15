import MenagePostForm from '@/components/admin/MenagePostForm';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Criar Post',
};

export default async function AdminPostNew() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-x1 font-extrabold">Criar Post</h1>
      <MenagePostForm mode="create" />
    </div>
  );
}
