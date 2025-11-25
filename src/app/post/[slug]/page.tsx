import SinglePost from '@/components/SinglePost';
import { SinglePostSkeleton } from '@/components/Skeleton/SinglePostSkeleton';
import { findBySlugPostCache } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type SlugPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: SlugPostProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await findBySlugPostCache(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function SlugPost({ params }: SlugPostProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SinglePostSkeleton />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
