import { Education } from '@/interfaces/gistResponse'

interface Props {
  education: Education[]
}

export function Education({ education }: Props) {
  return (
    <>
      {education.map((entry, index) => (
        <div key={index} className='text-xs'>
          <p>
            <strong>{entry.studyType}</strong>, {entry.area}
          </p>
          <a
            className='font-light text-zinc-600 underline underline-offset-2'
            href={entry.url}
            target='_blank'
            rel='noreferrer'
          >
            {entry.institution}
          </a>
        </div>
      ))}
    </>
  )
}
