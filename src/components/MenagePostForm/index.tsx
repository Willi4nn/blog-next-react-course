'use client';

import ImageUploader from '../admin/ImageUploader';
import { Button } from '../Button';
import InputCheckbox from '../InputCheckbox';
import InputText from '../InputText';
import { MarkdownEditor } from '../MarkdownEditor';

import { useState } from 'react';

export default function MenagePostForm() {
  const [content, setContent] = useState('');

  return (
    <form action="" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <InputText labelText="Nome" placeholder="Digite seu nome" />

        <ImageUploader />

        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
        />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={content}
          setValue={setContent}
        />

        <InputCheckbox labelText="Aceito os termos" />
      </div>
      <div>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
