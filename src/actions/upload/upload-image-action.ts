'use server';

import { getLoginSessionToken } from '@/lib/login/menage-login';
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

  const isAuthenticated = await getLoginSessionToken();

  if (!isAuthenticated) {
    return makeResult({ error: 'Faça login novamente.' });
  }

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
  const imageUploadMaxSize =
    Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 5242880;
  if (file.size > imageUploadMaxSize) {
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
  const imageUploadDirectory =
    process.env.IMAGE_UPLOAD_DIRECTORY || 'uploads/images';
  const uploadFullPath = resolve(process.cwd(), 'public', imageUploadDirectory);
  await mkdir(uploadFullPath, { recursive: true });

  // Converte o arquivo para buffer
  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  // Caminho completo do arquivo a ser salvo
  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  // Salva o arquivo no disco
  await writeFile(fileFullPath, buffer);

  // Monta a URL pública da imagem
  const imageServerUrl =
    process.env.IMAGE_SERVER_URL || 'http://localhost:3000/uploads/images';
  const url = `${imageServerUrl}/${uniqueImageName}`;

  // Retorna o resultado (ajuste aqui para retornar a url correta)
  return makeResult({ url, error: '' });
}
