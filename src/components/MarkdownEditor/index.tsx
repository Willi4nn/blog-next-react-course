'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useId, useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textAreaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({
  labelText = '',
  value,
  setValue,
  textAreaName,
  disabled = false,
}: MarkdownEditorProps) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}

      <div data-color-mode={resolvedTheme === 'dark' ? 'dark' : 'light'}>
        <MDEditor
          className="whitespace-pre-wrap"
          value={value}
          onChange={(value) => {
            if (value === undefined) return;
            setValue(value);
          }}
          height={400}
          extraCommands={[]}
          preview="edit"
          hideToolbar={disabled}
          textareaProps={{
            id,
            name: textAreaName,
            disabled: disabled,
          }}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
            remarkPlugins: [[remarkGfm]],
          }}
        />
      </div>
    </div>
  );
}
