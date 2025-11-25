import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  href: string;
  src: string;
  alt: string;
};

export default function PostCoverImage({
  href,
  src,
  alt,
}: PostCoverImageProps) {
  return (
    <Link
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800"
      href={href}
    >
      <Image
        className="object-cover object-center transition-transform hover:scale-105"
        src={src}
        height={720}
        width={1200}
        alt={alt}
        priority
      />
    </Link>
  );
}
