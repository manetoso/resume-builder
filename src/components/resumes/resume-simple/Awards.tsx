import { getMonthAndYear } from '@/utils/utils'
import { Award } from '@/interfaces/gistResponse'

interface Props {
  awards: Award[]
}

export function Awards({ awards }: Props) {
  return (
    <>
      {awards.map((award, index) => (
        <div key={index} className='text-xs'>
          <p id='award-title' className='font-bold text-base'>
            {award.title}
          </p>
          <span id='awarder'>
            {award.awarder} - {getMonthAndYear(award.date)}
          </span>
          <p id='summary' className='font-light text-zinc-600 italic'>
            {award.summary}
          </p>
        </div>
      ))}
    </>
  )
}
