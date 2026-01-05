import PostsListAdmin from '@/components/admin/PostsListAdmin';
import { AdminPostListSkeleton } from '@/components/Skeleton/AdminPostListSkeleton';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Post',
};

export default async function AdminPost() {
  return (
    <Suspense fallback={<AdminPostListSkeleton />}>
      <PostsListAdmin />
    </Suspense>
  );
}
