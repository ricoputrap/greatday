import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { EnumCookie, EnumPagePath } from './types/enum';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = cookies().get(EnumCookie.SESSION); 

  switch (request.nextUrl.pathname) {
    case EnumPagePath.LOGIN:
    case EnumPagePath.REGISTER:
      if (token) {
        return NextResponse.redirect(new URL(EnumPagePath.HOME, request.url));
      }
      break;

    default:
      if (!token) {
        return NextResponse.redirect(new URL(EnumPagePath.LOGIN, request.url));
      }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}