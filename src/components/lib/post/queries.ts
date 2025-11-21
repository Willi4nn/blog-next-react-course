import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPostsQuery = cache(
  async () => await postRepository.findAllPublic()
);
