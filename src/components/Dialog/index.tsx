'use client';

interface DialogProps {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
}

export default function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={handleCancel}
    >
      <div
        className="dark: mx-4 w-full max-w-md rounded-lg bg-slate-200 p-4 text-center shadow-lg sm:min-w-[300px] sm:p-6 dark:bg-[#0d1117]"
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title" className="text-lg font-semibold">
          {title}
        </h2>
        <p id="dialog-description" className="mb-4 text-sm">
          {content}
        </p>
        <div className="mt-4 flex justify-around">
          <button
            className="flex cursor-pointer rounded border border-red-700 px-4 py-2 text-red-700 transition hover:bg-red-800 hover:text-white disabled:cursor-not-allowed"
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className="flex cursor-pointer rounded bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-700/50"
            onClick={onConfirm}
            disabled={disabled}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
