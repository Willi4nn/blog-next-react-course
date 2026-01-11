'use server';

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOAD_DIRECTORY,
  IMAGE_UPLOAD_MAX_SIZE,
} from '@/lib/constants';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageActionResult = {
  url: string;
  error: string;
};

// Função server action para processar upload de imagem
export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  // Função auxiliar para padronizar o retorno
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  // Valida se o formData é válido
  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados do formulário inválidos.' });
  }

  // Obtém o arquivo enviado
  const file = formData.get('file');

  // Valida se o arquivo é válido
  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo de imagem inválido.' });
  }

  // Valida tamanho máximo
  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({
      error: 'O tamanho do arquivo excede o limite de 5MB.',
    });
  }

  // Valida se é uma imagem
  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'O arquivo enviado não é uma imagem.' });
  }

  // Gera nome único para a imagem
  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  // Garante que o diretório de upload existe
  const uploadFullPath = resolve(
    process.cwd(),
    'public',
    IMAGE_UPLOAD_DIRECTORY
  );
  await mkdir(uploadFullPath, { recursive: true });

  // Converte o arquivo para buffer
  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  // Caminho completo do arquivo a ser salvo
  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  // Salva o arquivo no disco
  await writeFile(fileFullPath, buffer);

  // Monta a URL pública da imagem
  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  // Retorna o resultado (ajuste aqui para retornar a url correta)
  return makeResult({ url, error: '' });
}
