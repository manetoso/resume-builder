import { Basics } from '@/interfaces/gistResponse'
import { deleteWWW } from '@/utils/utils'

export function Header({
  email,
  label,
  name,
  phone,
  phoneUrl,
  profiles,
  url
}: Basics) {
  const names = name.split(' ')
  // const names = ['emmanuel', 'cortes', 'tovar']

  return (
    <section id='header' className='relative'>
      <ul className='flex flex-col'>
        {names.map((entry, index) => (
          <li
            key={index}
            className={`font-black uppercase tracking-tighter text-9xl ${
              index % 2 === 0 ? 'text-right' : 'text-left outline-text'
            }`}
          >
            <span>{entry}</span>
          </li>
        ))}
        <li
          className={`font-bold text-5xl ${
            names.length % 2 === 0 ? 'text-left' : 'text-right'
          }`}
        >
          <span>{label}</span>
        </li>
      </ul>
      {/* LINKS */}
      <ul
        className={`absolute text-xs ${
          names.length % 2 === 0 ? 'text-right right-0' : 'text-left left-0'
        } ${names[names.length - 1].length <= 6 ? 'bottom-20' : 'top-[100%]'}`}
      >
        <li>
          <a
            className='text-[#363636] underline underline-offset-2'
            href={`tel:${phoneUrl}`}
            target='_blank'
            rel='noreferrer'
          >
            {phone}
          </a>
        </li>
        <li>
          <a
            className='text-[#363636] underline underline-offset-2'
            href={`mailto:${email}`}
            target='_blank'
            rel='noreferrer'
          >
            {email}
          </a>
        </li>
        <li>
          <a
            className='text-[#363636] underline underline-offset-2'
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            {deleteWWW(url)}
          </a>
        </li>
        {profiles.map(({ url }) => {
          const testWww =
            url.indexOf('www.') === -1 ? 8 : url.indexOf('www.') + 4
          const testCom = url.indexOf('.com') + 4
          const subText1 = url.substring(testWww, testCom)
          const subText2 = url.substring(testCom, url.length)
          return (
            <li key={url}>
              <a
                className='text-[#363636] underline underline-offset-2'
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                {subText1}
                {subText2}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
