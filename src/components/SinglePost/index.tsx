import { findBySlugPostCache } from '@/lib/post/queries';
import Image from 'next/image';
import PostDate from '../PostDate';
import PostHeading from '../PostHeading';
import SafeMarkdown from '../SafeMarkdown';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findBySlugPostCache(slug);

  return (
    <article className="mx-auto mb-16 flex max-w-5xl flex-col">
      <header className="mb-4 flex flex-col gap-4">
        <Image
          className="rounded-lg"
          src={post.coverImageUrl}
          width={1200}
          height={675}
          alt={post.title}
          priority
        />

        <PostHeading href={`/post/${post.slug}`} as="h1">
          {post.title}
        </PostHeading>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="mb-6 text-xl text-slate-700 dark:text-slate-300">
        {post.excerpt}
      </p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
