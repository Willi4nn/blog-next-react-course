import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';
import { findAllPublicPostsQuery } from '../lib/post/queries';

export default async function PostFeatured() {
  const post = await findAllPublicPostsQuery().then((posts) => posts[0]);

  const slug = 'the-journey-to-mastery-my-path-to-becoming-a-software-engineer';
  const postLink = `/post/${slug}`;

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
