interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen">
      <div className="mx-w-screen-lg mx-auto p-8">{children} </div>
    </div>
  );
}
