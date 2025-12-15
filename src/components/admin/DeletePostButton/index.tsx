'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import { Trash2Icon } from 'lucide-react';
import { useState, useTransition } from 'react';
import { toast } from 'react-toastify';
import Dialog from '../../Dialog';

interface DeletePostButtonProps {
  id: string;
  title: string;
}

export default function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  async function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss();

    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(`Erro ao apagar post: ${result.error}`);
        return;
      }

      toast.success('Post apagado com sucesso!');
    });
  }

  return (
    <>
      <button
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
        className="cursor-pointer text-red-500 transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Trash2Icon />
      </button>
      {showDialog && (
        <Dialog
          title="Apagar Post"
          content={`Tem certeza que deseja apagar o post ${title}`}
          isVisible
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
}
