import { DEFAULT_DELAY_MS } from '@/lib/constants';
import { PostModel } from '@/models/post/post-model';
import { asyncDelay } from '@/utils/async-delay';
import { id } from 'date-fns/locale';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json'
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedPosts = JSON.parse(jsonContent);
    const { posts } = parsedPosts;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(DEFAULT_DELAY_MS, true);
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(DEFAULT_DELAY_MS, true);
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error('Post not found for Id: ' + id);

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error('Post not found for Id: ' + id);

    return post;
  }
}
