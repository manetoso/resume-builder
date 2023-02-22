import { Skill } from '@/interfaces/gistResponse'

interface Props {
  skills: Skill[]
}

export function Skills({ skills }: Props) {
  return (
    <>
      {skills.map(({ keywords, name }, index) => (
        <li key={index} className='flex gap-1 text-xs first:pt-1'>
          <div className='flex-[0.75] flex flex-col'>
            <span className='font-bold'>{name}</span>
          </div>
          <div className='flex-[1.25] flex flex-col'>
            <span>{keywords.join(', ')}</span>
          </div>
        </li>
      ))}
    </>
  )
}
