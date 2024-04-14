import { getJobById } from '@/lib/data'

export const GET = (_req: Request, { params }: { params: { id: string } }) => {
  try {
    const job = getJobById(Number(params.id))

    if (!job) {
      return Response.json({ message: 'Job not found' }, { status: 404 })
    }

    return Response.json(job)
  } catch (error) {
    return Response.json({ message: 'Failed to fetch job' }, { status: 500 })
  }
}
