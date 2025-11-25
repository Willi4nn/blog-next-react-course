import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
  return (
    <div className="flex items-start justify-between mb-8 lg:mb-12">
      <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-8 lg:mb-12">
        <Link href="/">The Blog</Link>
      </h1>
      <ThemeToggle />
    </div>
  );
}
