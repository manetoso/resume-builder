import { getMonthAndYear } from '@/utils/utils'
import { Certificate } from '@/interfaces/gistResponse'

interface Props {
  certificates: Certificate[]
}

export function Certificates({ certificates }: Props) {
  return (
    <>
      {certificates.map((certificate) => (
        <div key={certificate.name} className='text-xs'>
          <a
            id='certificate-name'
            className='font-light text-zinc-600 underline underline-offset-2'
            href={certificate.url}
            target='_blank'
            rel='noreferrer'
          >
            <p>{certificate.name}</p>
          </a>
          <span id='issuer'>
            {certificate.issuer} - {getMonthAndYear(certificate.date)}
          </span>
        </div>
      ))}
    </>
  )
}
