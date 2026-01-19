import { NextRequest, NextResponse } from 'next/server';
import { verifyJWT } from './lib/login/menage-login';

export async function proxy(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isGetRequest = request.method === 'GET';

  const shouldBeAuthenticated = isAdminPage && !isLoginPage;
  const shouldRedirect = shouldBeAuthenticated && isGetRequest;

  if (!shouldRedirect) return NextResponse.next();

  const jwtSession = request.cookies.get(
    process.env.LOGIN_COOKIE_NAME || 'loginSession'
  )?.value;

  const isAuthenticated = await verifyJWT(jwtSession);

  if (!isAuthenticated) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  console.log('Middleware - isAuthenticated:', isAuthenticated);

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
