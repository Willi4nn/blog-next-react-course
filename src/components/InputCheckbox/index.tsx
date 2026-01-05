import { cn } from '@/lib/cn';
import { useId } from 'react';

type InputCheckboxProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

export default function InputCheckbox({
  labelText = '',
  type = 'checkbox',
  ...props
}: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <input
        type={type}
        id={id}
        {...props}
        className={cn(
          'outiline-none h-6 w-6 rounded-sm focus:ring-2 focus:ring-blue-500',
          props.className
        )}
      />

      {labelText && (
        <label htmlFor={id} className="text-sm font-medium">
          {labelText}
        </label>
      )}
    </div>
  );
}
