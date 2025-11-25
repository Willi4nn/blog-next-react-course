import { formatDatetime, formatRelativeDate } from '@/utils/format-date';

type PostDateProps = {
  dateTime: string;
};

export default function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-slate-600 dark:text-slate-400 text-sm"
      title={formatRelativeDate(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
