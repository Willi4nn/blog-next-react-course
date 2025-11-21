type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = '' }: SpinLoaderProps) {
  const containerClassName = `flex items-center justify-center ${className}`;
  return (
    <div className={containerClassName}>
      <div className="w-10 h-10 border-5 border-t-transparent border-slate-900 round-5 rounded-full animate-spin"></div>
    </div>
  );
}
