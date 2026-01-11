import { cn } from '@/lib/cn';

type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

const buttonVariants: Record<ButtonVariants, string> = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  ghost:
    'bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const buttonSizes: Record<ButtonSizes, string> = {
  sm: 'px-3 py-1 text-sm rounded-sm [&_svg]:w-4 [&_svg]:h-4 gap-1',
  md: 'px-4 py-2 text-base rounded-sm [&_svg]:w-5 [&_svg]:h-5 gap-2',
  lg: 'px-5 py-3 text-lg rounded-lg [&_svg]:w-6 [&_svg]:h-6 gap-3',
};

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'default',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex cursor-pointer items-center justify-center transition',
        'disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500',
        'dark:disabled:bg-slate-700 dark:disabled:text-slate-400',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
}
