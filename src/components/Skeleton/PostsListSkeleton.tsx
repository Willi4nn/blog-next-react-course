import { Skeleton } from '@/components/Skeleton';

export function PostsListSkeleton() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_i, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-video w-full rounded-lg" />
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      ))}
    </div>
  );
}
