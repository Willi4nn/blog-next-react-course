'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

export default function ImageUploader() {
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState<string | null>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseImage() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleUploadImage() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableSize = IMAGE_UPLOAD_MAX_SIZE / (1024 * 1024);
      toast.error(`Imagem muito grande! O tamanho máximo é ${readableSize}MB.`);

      fileInput.value = '';
      setImgUrl('');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // Faz o upload da imagem usando server action
    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(`Erro ao enviar imagem: ${result.error}`);
        fileInput.value = '';
        setImgUrl('');
        return;
      }

      setImgUrl(result.url);
      toast.success('Imagem enviada com sucesso!');
      console.log('URL da imagem:', result.url);
    });

    fileInput.value = '';
  }
  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        onClick={handleChooseImage}
        className="self-start"
        disabled={isUploading}
      >
        <ImageUpIcon />
        Enviar imagem
      </Button>

      {!!imgUrl && (
        <div className="flex flex-col gap-4">
          <p>
            <b>Url: </b>
            {imgUrl}
          </p>
          <img
            src={imgUrl}
            alt="Imagem enviada"
            className="max-w-xs rounded-lg"
          />
        </div>
      )}

      <input
        ref={fileInputRef}
        onChange={handleUploadImage}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        disabled={isUploading}
      />
    </div>
  );
}
