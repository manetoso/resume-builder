import { getMonthAbbreviatedAndYear } from '@/utils/utils'
import { Work } from '@/interfaces/gistResponse'

interface Props {
  work: Work[]
}

export function Work({ work }: Props) {
  return (
    <>
      {work.map(
        ({ name, position, startDate, summary, url, endDate }, index) => (
          <li key={index} className='flex gap-1 text-xs first:pt-1'>
            <div className='flex-[0.75] flex flex-col'>
              <a
                className='font-bold text-[#363636] underline underline-offset-2'
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                {name}
              </a>
              <span className='font-semibold'>{position}</span>
              <span>
                {`${getMonthAbbreviatedAndYear(startDate)} - ${
                  endDate ? getMonthAbbreviatedAndYear(endDate) : 'Present'
                }`}
              </span>
            </div>
            <p className='flex-[1.25]'>{summary}</p>
          </li>
        )
      )}
    </>
  )
}
