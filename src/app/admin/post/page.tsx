import PostsListAdmin from '@/components/admin/PostsListAdmin';
import { PostsListSkeleton } from '@/components/Skeleton/PostsListSkeleton';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Post',
};

export default async function AdminPost() {
  return (
    <Suspense fallback={<PostsListSkeleton />}>
      <PostsListAdmin />
    </Suspense>
  );
}
