import { getMonthAbbreviatedAndYear } from '@/utils/utils'
import { Certificate } from '@/interfaces/gistResponse'

interface Props {
  certificates: Certificate[]
}

export function Certificates({ certificates }: Props) {
  return (
    <>
      {certificates.map(({ date, issuer, name, url }, index) => (
        <li key={index} className='flex gap-1 text-xs first:pt-1'>
          <div className='flex-[0.75] flex flex-col'>
            <span>{issuer}</span>
            <span>{getMonthAbbreviatedAndYear(date)}</span>
          </div>
          <div className='flex-[1.25] flex flex-col'>
            <a
              className='font-bold text-[#363636] underline underline-offset-2'
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              {name}
            </a>
          </div>
        </li>
      ))}
    </>
  )
}
