import { getMonthAndYear } from '@/utils/utils'
import { Work } from '@/interfaces/gistResponse'

interface Props {
  work: Work[]
}

export function Work({ work }: Props) {
  return (
    <>
      {work.map((job) => (
        <div key={job.name} className='flex flex-col gap-1'>
          <div className='flex justify-between items-start'>
            <div className='flex flex-col'>
              <span className='font-bold text-base'>{job.position}</span>
              <span className='flex gap-2 text-zinc-600 font-light text-sm'>
                <a
                  className='text-zinc-600 underline underline-offset-2'
                  href={job.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {job.name}
                </a>
                {job.location}
              </span>
            </div>
            <div>
              <span className='text-zinc-600 font-light text-sm'>
                {getMonthAndYear(job.startDate)} -{' '}
                {job.endDate ? getMonthAndYear(job.endDate) : 'Present'}
              </span>
            </div>
          </div>
          <div>
            <p className='text-xs'>{job.summary}</p>
          </div>
        </div>
      ))}
    </>
  )
}
