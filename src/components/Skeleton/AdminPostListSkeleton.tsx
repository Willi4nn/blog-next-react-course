import { Skeleton } from '@/components/Skeleton';

export function AdminPostListSkeleton() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-2">
      {[...Array(10)].map((_i, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-8 w-full" />
        </div>
      ))}
    </div>
  );
}
