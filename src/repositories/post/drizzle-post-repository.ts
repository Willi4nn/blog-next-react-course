import { drizzleDb } from '@/db/drizzle';
import { DEFAULT_DELAY_MS } from '@/lib/constants';
import { PostModel } from '@/models/post/post-model';
import { asyncDelay } from '@/utils/async-delay';
import { logColor } from '@/utils/log-color';
import { and, desc, eq } from 'drizzle-orm';
import { PostRepository } from './post-repository';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(DEFAULT_DELAY_MS, true);
    logColor('findAllPublic', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts) => desc(posts.createdAt),
      where: (posts) => eq(posts.published, true),
    });
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(DEFAULT_DELAY_MS, true);
    logColor('findAll', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(DEFAULT_DELAY_MS, true);
    logColor('findById', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post not found for Id: ' + id);

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(DEFAULT_DELAY_MS, true);
    logColor('findBySlugPublic', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts) => and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post not found for Slug: ' + slug);

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findAll();

//   // como-a-tecnologia-impacta-nosso-bem-estar false
//   // os-desafios-do-trabalho-remoto-moderno true

//   // 6b204dab-2312-4525-820a-a0463560835f false
//   // 76396dd3-9581-43b5-856d-fe1a78714e8c true

//   // posts.forEach((post) => {
//   //   console.log(post.id, post.published);
//   // });

//   const post = await repo.findBySlugPublic(
//     'como-a-tecnologia-impacta-nosso-bem-estar'
//   );
//   console.log(post);
// })();
