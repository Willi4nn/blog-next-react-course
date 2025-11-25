import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  href?: string;
  as?: 'h1' | 'h2' | 'h3';
};

export default function PostHeading({
  children,
  href = '#',
  as = 'h1',
}: PostHeadingProps) {
  const Tag = as;
  return (
    <Tag className="text-2xl font-extrabold mb-4 mt-2 hover:underline hover:text-blue-500">
      <Link href={href}>{children}</Link>
    </Tag>
  );
}
