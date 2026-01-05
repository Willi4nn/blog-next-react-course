import clsx from 'clsx';

type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx('bg-blue-600 text-white hover:bg-blue-700'),
    ghost: clsx(
      'bg-slate-300  hover:bg-slate-400',
      'dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'
    ),
    danger: clsx('bg-red-600 text-white hover:bg-red-700'),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(
      'px-3 py-1 text-sm py-1 px-2 rounded-sm [&_svg]:w-4 [&_svg]:h-4 gap-1'
    ),
    md: clsx(
      'px-4 py-2 text-base py-2 px-3 rounded-sm [&_svg]:w-5 [&_svg]:h-5 gap-2'
    ),
    lg: clsx(
      'px-5 py-3 text-lg py-3 px-5 rounded-lg [&_svg]:w-6 [&_svg]:h-6 gap-3'
    ),
  };

  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    'flex items-center justify-center cursor-pointer transition',
    'disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed',
    'dark:disabled:bg-slate-700 dark:disabled:text-slate-400',
    props.className
  );

  return <button className={buttonClasses} {...props} />;
}
