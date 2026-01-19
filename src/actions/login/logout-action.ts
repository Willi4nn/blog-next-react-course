'use server';

import { deleteLoginSession } from '@/lib/login/menage-login';
import { redirect } from 'next/navigation';

export async function logoutAction() {
  await deleteLoginSession();
  redirect('/');
}
