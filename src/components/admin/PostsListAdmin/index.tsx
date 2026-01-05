import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import Link from 'next/link';
import ErrorMessage from '../../ErrorMessage';
import DeletePostButton from '../DeletePostButton';

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  if (posts.length === 0) {
    return <ErrorMessage content="Bora criar seu primeiro post?" />;
  }

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={`flex items-center justify-between px-2 py-2 ${!post.published && 'gap-2 bg-slate-300 text-black'}`}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && <span> (Draft)</span>}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
