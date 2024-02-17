import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const withAuthList = [
  '/mypage/(.*)',
  '/bookmarked/(.*)',
  '/cart/(.*)',
  '/community/writeme',
];
const withOutAuthList = ['/signin', '/signup'];

const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = '/signin';

    return NextResponse.redirect(url);
  }
};

const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null,
) => {
  const url = req.nextUrl.clone();
  if (token) {
    url.pathname = to ?? '/';

    return NextResponse.redirect(url);
  }
};

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const { searchParams } = req.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');

  const isWithAuth = withAuthList.some((pattern) => {
    const regex = new RegExp(`^${pattern}`);
    return regex.test(pathname);
  });

  const isWithOutAuth = withOutAuthList.includes(pathname);

  if (isWithAuth) return withAuth(req, !!token);
  if (isWithOutAuth) return withOutAuth(req, !!token, callbackUrl);
}
