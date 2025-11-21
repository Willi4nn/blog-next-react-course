import PostFeatured from '@/components/PostFeatured';
import { PostsList } from '@/components/ui/PostsList';
import { SpinLoader } from '@/components/ui/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
