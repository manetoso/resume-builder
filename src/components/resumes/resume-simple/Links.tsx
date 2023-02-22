import { deleteWWW } from '@/utils/utils'
import { Basics } from '@/interfaces/gistResponse'

export function Links({ profiles, url }: Basics) {
  return (
    <ul className='text-xs'>
      {url && (
        <li>
          <a
            className='font-light text-zinc-600 underline underline-offset-2'
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            <strong>{deleteWWW(url)}</strong>
          </a>
        </li>
      )}
      {profiles.map(({ url }) => {
        const testWww = url.indexOf('www.') === -1 ? 8 : url.indexOf('www.') + 4
        const testCom = url.indexOf('.com') + 4
        const subText1 = url.substring(testWww, testCom)
        const subText2 = url.substring(testCom, url.length)
        return (
          <li key={url}>
            <a
              className='font-light text-zinc-600 underline underline-offset-2'
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              <strong>{subText1}</strong>
              {subText2}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
