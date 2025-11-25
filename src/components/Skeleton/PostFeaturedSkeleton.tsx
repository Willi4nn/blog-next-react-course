import { Skeleton } from '@/components/Skeleton';

export function PostFeaturedSkeleton() {
  return (
    <section className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <Skeleton className="aspect-video w-full rounded-lg" />

      <div className="flex flex-col justify-center space-y-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    </section>
  );
}
