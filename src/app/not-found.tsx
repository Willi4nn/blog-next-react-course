import ErrorMessage from '@/components/ErrorMessage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'A página que você está procurando não existe.',
};

export default function NotFound() {
  return (
    <ErrorMessage
      pageTitle="404"
      content="A página que você está procurando não foi encontrada."
    />
  );
}
