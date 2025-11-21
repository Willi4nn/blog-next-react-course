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
    <Link className="w-full h-full overflow-hidden rounded-lg" href={href}>
      <Image
        className="w-full h-full hover:scale-105 transition-transform object-cover object-center"
        src={src}
        height={720}
        width={1200}
        alt={alt}
        priority
      />
    </Link>
  );
}
