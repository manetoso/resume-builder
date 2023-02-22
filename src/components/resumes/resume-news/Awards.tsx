import { getMonthAbbreviatedAndYear } from '@/utils/utils'
import { Award } from '@/interfaces/gistResponse'

interface Props {
  awards: Award[]
}

export function Awards({ awards }: Props) {
  return (
    <>
      {awards.map(({ awarder, date, summary, title }, index) => (
        <li key={index} className='flex gap-1 text-xs first:pt-1'>
          <div className='flex-[0.75] flex flex-col'>
            <span className='font-bold'>{awarder}</span>
            <span>{getMonthAbbreviatedAndYear(date)}</span>
          </div>
          <div className='flex-[1.25] flex flex-col'>
            <span className='font-bold'>{title}</span>
            <p>{summary}</p>
          </div>
        </li>
      ))}
    </>
  )
}
