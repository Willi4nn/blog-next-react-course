'use server';

import { getLoginSessionToken } from '@/lib/login/menage-login';
import { postRepository } from '@/repositories/post';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  const isAuthenticated = await getLoginSessionToken();

  if (!isAuthenticated) {
    return {
      errors: ['Faça login novamente.'],
    };
  }

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos.',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: 'Erro desconhecido ao apagar o post.',
    };
  }

  revalidateTag('posts', 'default');
  revalidateTag(`post-${post.slug}`, 'default');

  return {
    error: '',
  };
}
