import { jobs } from './jobs'

export const getJobs = (level: string | null) => {
  const allJobs = jobs
  if (level) {
    return allJobs.filter((job) => job.level === level)
  }
  return allJobs
}

export const getJobById = (id: number) => {
  const allJobs = jobs
  return allJobs.find((job) => job.id === id)
}
