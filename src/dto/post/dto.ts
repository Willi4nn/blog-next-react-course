import { PostModel } from '@/models/post/post-model';

// Versão pública do post (sem updatedAt)
export type PublicPost = Omit<PostModel, 'updatedAt'>;

// Cria PublicPost com valores padrão - usado para inicializar formulário
export const makePartialPublicPost = (
  post?: Partial<PostModel>
): PublicPost => {
  return {
    id: post?.id || '',
    slug: post?.slug || '',
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    author: post?.author || '',
    content: post?.content || '',
    coverImageUrl: post?.coverImageUrl || '',
    createdAt: post?.createdAt || '',
    published: post?.published || false,
  };
};

// Converte PostModel (banco) para PublicPost (cliente)
export const makePublicPostFromDb = (post: PostModel): PublicPost => {
  return makePartialPublicPost(post);
};
