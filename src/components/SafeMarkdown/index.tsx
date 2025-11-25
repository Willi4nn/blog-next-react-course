import { cn } from '@/lib/cn';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export default function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={cn(
        'w-full max-w-none overflow-hidden',
        'prose prose-slate dark:prose-invert',
        'prose-a:text-blue-500 prose-a:no-underline prose-a:transition',
        'prose-a:hover:text-blue-800',
        'dark:prose-a:text-blue-400 dark:prose-a:hover:text-blue-300',
        'prose-img:mx-auto prose-img:rounded-lg',
        'prose-headings:scroll-mt-20',
        'prose-code:rounded prose-code:bg-slate-100 prose-code:text-slate-800 dark:prose-code:text-slate-200 prose-code:px-1 prose-code:py-0.5',
        'dark:prose-code:bg-slate-800',
        'prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800',
        'lg:prose-lg'
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';

            return (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]" {...props} />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
