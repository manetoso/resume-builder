import { Skill } from '@/interfaces/gistResponse'

interface Props {
  skills: Skill[]
}

export function Skills({ skills }: Props) {
  return (
    <>
      {skills.map((skill) => (
        <div key={skill.name} className='flex flex-col'>
          <span className='font-bold text-base'>{skill.name}</span>
          <p className='text-zinc-600 font-light text-xs'>
            {skill.keywords.join(', ')}
          </p>
        </div>
      ))}
    </>
  )
}
