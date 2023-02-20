import { Layout } from '@/components/Layout'
import { PrintButton } from '@/components/PrintButton'
import { useFetchGistData } from '@/hooks/useFetchGistData'
import { deleteWWW, getMonthAbbreviatedAndYear } from '@/utils/utils'

import { Basics } from '@/interfaces/gistResponse'

function Header({ email, name, phone, phoneUrl, profiles, url }: Basics) {
  const names = name.split(' ')
  // const names = ['emmanuel', 'cortes', 'tovar']
  const lastNameLength = names[names.length - 1].length
  console.log(lastNameLength)

  return (
    <section id='header' className='relative'>
      <ul className='flex flex-col'>
        {names.map((entry, index) => (
          <li
            key={index}
            className={`font-black uppercase tracking-tighter text-9xl ${
              index % 2 === 0 ? 'text-right' : 'text-left test'
            }`}
          >
            <span>{entry}</span>
          </li>
        ))}
      </ul>
      <ul
        className={`absolute text-xs ${
          names.length % 2 === 0 ? 'text-right right-0' : 'text-left left-0'
        } ${names[names.length - 1].length <= 6 ? 'bottom-8' : 'top-[100%]'}`}
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

export default function Resume() {
  const { resumeData } = useFetchGistData()
  const { basics, work, skills, education, languages, certificates, awards } =
    resumeData

  return (
    <Layout>
      <PrintButton />
      <main>
        <div id='section-to-print' className='flex flex-col gap-6'>
          {basics !== null && <Header {...basics} />}
          <div className='flex gap-4'>
            <section className='flex-1 flex flex-col gap-6'>
              {work.length > 0 && (
                <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
                  <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
                    Work Experience
                  </h3>
                  <ul className='flex flex-col gap-2'>
                    {work.map(
                      (
                        { name, position, startDate, summary, url, endDate },
                        index
                      ) => (
                        <li
                          key={index}
                          className='flex gap-1 text-xs first:pt-1'
                        >
                          <div className='flex-[0.75] flex flex-col'>
                            <a
                              className='font-bold text-[#363636] underline underline-offset-2'
                              href={url}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {name}
                            </a>
                            <span className='font-semibold'>{position}</span>
                            <span>
                              {`${getMonthAbbreviatedAndYear(startDate)} - ${
                                endDate
                                  ? getMonthAbbreviatedAndYear(endDate)
                                  : 'Present'
                              }`}
                            </span>
                          </div>
                          <p className='flex-[1.25]'>{summary}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {awards.length > 0 && (
                <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
                  <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
                    Awards
                  </h3>
                  <ul className='flex flex-col gap-2'>
                    {awards.map(({ awarder, date, summary, title }, index) => (
                      <li key={index} className='flex gap-1 text-xs first:pt-1'>
                        <div className='flex-[0.75] flex flex-col'>
                          <span className='font-bold'>{awarder}</span>
                          <span>{getMonthAbbreviatedAndYear(date)}</span>
                        </div>
                        <div className='flex-[1.25] flex flex-col'>
                          <span className='font-bold'>{title}</span>
                          <p>{summary}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {languages.length > 0 && (
                <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
                  <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
                    Languages
                  </h3>
                  <ul className='flex flex-col gap-2'>
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
                  </ul>
                </div>
              )}
            </section>
            <section className='flex-1 flex flex-col gap-6'>
              {education.length > 0 && (
                <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
                  <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
                    Education
                  </h3>
                  <ul className='flex flex-col gap-2'>
                    {education.map(
                      (
                        {
                          area,
                          degree,
                          endDate,
                          institution,
                          startDate,
                          studyType,
                          url
                        },
                        index
                      ) => (
                        <li
                          key={index}
                          className='flex gap-1 text-xs first:pt-1'
                        >
                          <div className='flex-[0.75] flex flex-col'>
                            <a
                              className='font-bold text-[#363636] underline underline-offset-2'
                              href={url}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {institution}
                            </a>
                            <span className='font-semibold'>{degree}</span>
                            <span>
                              {`${getMonthAbbreviatedAndYear(
                                startDate
                              )} - ${getMonthAbbreviatedAndYear(endDate)}`}
                            </span>
                          </div>
                          <div className='flex-[1.25] flex flex-col'>
                            <span className='font-semibold'>{studyType}</span>
                            <span>{area}</span>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {skills.length > 0 && (
                <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
                  <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
                    Skills
                  </h3>
                  <ul className='flex flex-col gap-2'>
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
                  </ul>
                </div>
              )}
              {certificates.length > 0 && (
                <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
                  <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
                    Certificates
                  </h3>
                  <ul className='flex flex-col gap-2'>
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
                  </ul>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}
