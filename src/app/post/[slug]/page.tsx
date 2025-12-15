import SinglePost from '@/components/SinglePost';
import { SinglePostSkeleton } from '@/components/Skeleton/SinglePostSkeleton';
import { findPublicBySlugPostCache } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

type SlugPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: SlugPostProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await findPublicBySlugPostCache(slug);

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
