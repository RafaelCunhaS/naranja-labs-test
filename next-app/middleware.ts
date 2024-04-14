import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.headers.get('authorization') !== process.env.AUTH_TOKEN) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)']
}
