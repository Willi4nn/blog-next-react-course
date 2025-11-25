import { Skeleton } from '@/components/Skeleton';

export function SinglePostSkeleton() {
  return (
    <article className="mx-auto mb-16 max-w-5xl space-y-6">
      <Skeleton className="aspect-video w-full rounded-lg" />
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-5 w-48" />
      <Skeleton className="h-7 w-full" />
      <Skeleton className="h-7 w-full" />
    </article>
  );
}
