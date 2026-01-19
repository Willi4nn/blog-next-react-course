import ErrorMessage from '@/components/ErrorMessage';
import { LoginForm } from '../LoginForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Login',
};

export default function AdminLogin() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN) || 0);

  if (!allowLogin) {
    return (
      <ErrorMessage
        pageTitle="403"
        content="Logins estão desabilitados no momento. Libere usando ALLOW_LOGIN=1 nas variáveis de ambiente."
      />
    );
  }

  return <LoginForm />;
}
