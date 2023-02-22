import { Basics } from '@/interfaces/gistResponse'

export function Header({
  email,
  label,
  location,
  name,
  phone,
  phoneUrl,
  summary
}: Basics) {
  return (
    <header id='basics' className='flex flex-col gap-1'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col flex-[1.5]'>
          <span id='name' className='font-black text-6xl leading-[45px]'>
            {name}
          </span>
          <span id='position' className='text-2xl'>
            {label}
          </span>
        </div>
        <div className='text-right flex-[1] text-xs'>
          <ul id='contact' className='flex flex-col gap-1'>
            <li>
              <a
                className='font-light text-zinc-600 underline underline-offset-2'
                href={`tel:${phoneUrl}`}
              >
                {phone}
              </a>
            </li>
            <li>
              <a
                className='font-light text-zinc-600 underline underline-offset-2'
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </li>
            <li>
              {`${location.city}, ${location.region}, ${location.countryCode}`}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className='text-xs'>{summary}</p>
      </div>
    </header>
  )
}
