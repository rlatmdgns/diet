import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const authorization = 'Authorization' as any
  const accessToken = request.cookies.get(authorization)

  if (request.nextUrl.pathname.startsWith('/sign-in')) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // sign-in 페이지를 제외한 모든 경로에 대해 미들웨어 적용
}
