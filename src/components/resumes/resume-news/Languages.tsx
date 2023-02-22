import { Language } from '@/interfaces/gistResponse'

interface Props {
  languages: Language[]
}

export function Languages({ languages }: Props) {
  return (
    <>
      {languages.map(({ fluency, language }, index) => (
        <li key={index} className='flex gap-1 text-xs first:pt-1'>
          <div className='flex-[0.75] flex flex-col'>
            <span className='font-bold'>{language}</span>
          </div>
          <div className='flex-[1.25] flex flex-col'>
            <span>{fluency}</span>
          </div>
        </li>
      ))}
    </>
  )
}
