import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center p-4 text-slate-600 dark:text-slate-400">
      <p>
        <span>&copy; Copyright {new Date().getFullYear()} - </span>
        <Link className="hover:underline" href="/">
          Blog Next.js | React. All rights reserved.
        </Link>
      </p>
    </footer>
  );
}
