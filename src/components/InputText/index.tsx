import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export default function InputText({ labelText, ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...props}
        className={clsx(
          'bg-white outline-0 dark:bg-slate-800',
          'rounded ring-2 ring-slate-400 dark:ring-slate-600',
          'px-3 py-2',
          'placeholder:slate-300 transition-all focus:ring-blue-500',
          'disabled:cursor-not-allowed disabled:bg-slate-200',
          'disabled:placeholder-slate-400 disabled:dark:bg-slate-700',
          'read-only:bg-slate-100 read-only:dark:bg-slate-700',
          props.className
        )}
        id={id}
      />
    </div>
  );
}
