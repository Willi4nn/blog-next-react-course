import { PostModel } from '@/models/post/post-model';
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
  delayMs = 0;

  private async simulateDelay(): Promise<void> {
    if (this.delayMs >= 0) {
      await new Promise((resolve) => setTimeout(resolve, this.delayMs));
    }
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedPosts = JSON.parse(jsonContent);
    const { posts } = parsedPosts;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateDelay();
    console.log('Reading posts from JSON file...');
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error('Post not found');

    return post;
  }
}
