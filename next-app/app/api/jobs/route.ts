import { getJobs } from '@/lib/data'

export const GET = (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const level = searchParams.get('level')
    const jobs = getJobs(level)

    return Response.json(jobs, { status: 200 })
  } catch (error) {
    return Response.json({ message: 'Failed to fetch jobs' }, { status: 500 })
  }
}
