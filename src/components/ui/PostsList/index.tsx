import { findAllPublicPostsQuery } from '@/components/lib/post/queries';
import PostCoverImage from '@/components/PostCoverImage';
import PostSummary from '@/components/PostSummary';

export async function PostsList() {
  const posts = await findAllPublicPostsQuery();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col gap-4" key={post.id}>
            <PostCoverImage
              href={postLink}
              src={post.coverImageUrl}
              alt={post.title}
            />

            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
