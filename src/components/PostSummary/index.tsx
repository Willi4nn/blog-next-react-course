import { formatDatetime, formatRelativeDate } from '@/utils/format-date';
import PostHeading from '../PostHeading';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2' | 'h3';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export default function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className=" flex flex-col justify-center">
      <time
        className="text-slate-600 block text-sm"
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading as={postHeading} href={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
