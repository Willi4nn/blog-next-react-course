import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsQueryCache = cache(
  async () => await postRepository.findAllPublic()
);

export const findByIdPostCache = cache(
  async (id: string) => await postRepository.findById(id)
);

export const findBySlugPostCache = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug);
  if (!post) notFound();
  return post;
});
