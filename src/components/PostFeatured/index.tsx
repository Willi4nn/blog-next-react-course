import { findAllPublicPostsQueryCache } from '../../lib/post/queries';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';

export default async function PostFeatured() {
  const posts = await findAllPublicPostsQueryCache();
  const post = posts[0];

  if (!post) return null;

  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2">
      <PostCoverImage
        src={post.coverImageUrl}
        alt={post.title}
        href={postLink}
      />
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
