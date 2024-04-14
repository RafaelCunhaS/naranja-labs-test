import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/api') &&
    req.headers.get('authorization') !== process.env.AUTH_TOKEN
  ) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
}
