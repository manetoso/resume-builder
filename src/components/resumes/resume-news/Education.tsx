import { getMonthAbbreviatedAndYear } from '@/utils/utils'
import { Education } from '@/interfaces/gistResponse'

interface Props {
  education: Education[]
}

export function Education({ education }: Props) {
  return (
    <>
      {education.map(
        (
          { area, degree, endDate, institution, startDate, studyType, url },
          index
        ) => (
          <li key={index} className='flex gap-1 text-xs first:pt-1'>
            <div className='flex-[0.75] flex flex-col'>
              <a
                className='font-bold text-[#363636] underline underline-offset-2'
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                {institution}
              </a>
              <span className='font-semibold'>{degree}</span>
              <span>
                {`${getMonthAbbreviatedAndYear(
                  startDate
                )} - ${getMonthAbbreviatedAndYear(endDate)}`}
              </span>
            </div>
            <div className='flex-[1.25] flex flex-col'>
              <span className='font-semibold'>{studyType}</span>
              <span>{area}</span>
            </div>
          </li>
        )
      )}
    </>
  )
}
