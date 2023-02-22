import { Language } from '@/interfaces/gistResponse'

interface Props {
  languages: Language[]
}

export function Languages({ languages }: Props) {
  return (
    <ul className='text-xs'>
      {languages.map((language) => (
        <li key={language.language}>
          {language.language} · {language.fluency}
        </li>
      ))}
    </ul>
  )
}
