'use server';

import { createLoginSession, verifyPassword } from '@/lib/login/menage-login';
import { asyncDelay } from '@/utils/async-delay';
import { redirect } from 'next/navigation';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN) || 0);

  if (!allowLogin) {
    return {
      username: '',
      error: 'Logins estão desabilitados no momento.',
    };
  }

  await asyncDelay(5000);

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Formulário inválido.',
    };
  }

  const username = formData.get('username')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';

  if (!username || !password) {
    return {
      username,
      error: 'Preencha todos os campos.',
    };
  }

  const validUsername = username === process.env.LOGIN_USER;
  const validPassword = await verifyPassword(
    password,
    process.env.LOGIN_PASS || ''
  );

  if (!validUsername || !validPassword) {
    return {
      username,
      error: 'Usuário ou senha inválidos.',
    };
  }

  await createLoginSession(username);
  redirect('/admin/post');
}
