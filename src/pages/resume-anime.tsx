import { Layout } from '@/components/Layout'
import { PrintButton } from '@/components/PrintButton'
import { useFetchGistData } from '@/hooks/useFetchGistData'
import { deleteWWW, getMonthAbbreviatedAndYear } from '@/utils/utils'

export default function Resume() {
  const { resumeData } = useFetchGistData()
  const { basics, work, skills, education, languages, certificates, awards } =
    resumeData

  return (
    <Layout>
      <PrintButton />
      <main>
        <div id='section-to-print' className='flex flex-col gap-6'>
          {basics !== null && (
            <section className='flex flex-col gap-0'>
              <span
                id='name'
                className='font-black uppercase tracking-tighter text-6xl text-right'
              >
                {basics.name}
              </span>
              <div className='flex'>
                <p className='flex-[1] font-black uppercase tracking-tighter'>
                  {basics.summary}
                </p>
                <span
                  id='position'
                  className='flex-[1.5] font-black uppercase tracking-tighter text-2xl text-center'
                >
                  ( {basics.label} )
                </span>
              </div>

              <div className='flex items-end'>
                <ul className='flex-[1] font-black tracking-tighter'>
                  <li>
                    <a
                      className='text-[#363636] underline underline-offset-2'
                      href={`tel:${basics.phoneUrl}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {basics.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-[#363636] underline underline-offset-2'
                      href={`mailto:${basics.email}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {basics.email}
                    </a>
                  </li>
                  {basics.url && (
                    <li>
                      <a
                        className='text-[#363636] underline underline-offset-2'
                        href={basics.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {deleteWWW(basics.url)}
                      </a>
                    </li>
                  )}
                  {basics.profiles.map(({ url }) => {
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

                <div
                  className={`flex-[1.5] grid ${
                    awards.length > 0 ? 'grid-cols-3' : 'grid-cols-2'
                  } gap-2`}
                >
                  {education.length > 0 && (
                    <div className='flex flex-col gap-3'>
                      <h3 className='text-[#363636] font-black text-sm uppercase m-0'>
                        Education
                      </h3>
                      <ul className='flex flex-col gap-2'>
                        {education.map((entry, index) => (
                          <li
                            key={index}
                            className='flex flex-col text-xs font-bold'
                          >
                            <span className='font-black'>
                              {getMonthAbbreviatedAndYear(entry.startDate)}-
                              {getMonthAbbreviatedAndYear(entry.endDate)}
                            </span>
                            <span>
                              {entry.studyType}, {entry.area}
                            </span>
                            <a
                              className='text-[#363636] underline underline-offset-2'
                              href={entry.url}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {entry.institution}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {awards.length > 0 && (
                    <div className='flex flex-col gap-3'>
                      <h3 className='text-[#363636] font-black text-sm uppercase m-0'>
                        Awards
                      </h3>
                      <ul className='flex flex-col gap-2'>
                        {awards.map((award) => (
                          <li
                            key={award.title}
                            className='flex flex-col text-xs font-bold'
                          >
                            <span className='font-black'>
                              {award.title} -{' '}
                              {getMonthAbbreviatedAndYear(award.date)}
                            </span>
                            <span>{award.awarder}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {skills.length > 0 && (
                    <div className='flex flex-col gap-3'>
                      <h3 className='text-[#363636] font-black text-sm uppercase m-0'>
                        Skills
                      </h3>
                      <ul className='flex flex-col gap-2'>
                        {skills.map((skill) => (
                          <li
                            key={skill.name}
                            className='flex flex-col text-xs font-bold'
                          >
                            <span className='uppercase font-black'>
                              {skill.name}
                            </span>
                            <span>{skill.keywords.join(', ')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {work.length > 0 && (
                <div className='flex gap-2 mt-14 text-sm'>
                  <div className='flex-[0.5]'>
                    <h3 className='text-[#363636] m-0 uppercase font-black'>
                      Work experience
                    </h3>
                  </div>
                  <div className='flex-[1.75] flex flex-col gap-6'>
                    {work.map((job, index) => (
                      <div key={index} className='flex gap-2'>
                        <div className='flex-[0.6] flex flex-col font-black uppercase'>
                          <span>
                            {getMonthAbbreviatedAndYear(job.startDate)} -{' '}
                            {job.endDate
                              ? getMonthAbbreviatedAndYear(job.endDate)
                              : 'Present'}
                          </span>
                          <span>{job.location}</span>
                        </div>
                        <div className='flex-[1.5] flex flex-col'>
                          <span className='font-black uppercase'>
                            {job.position}
                          </span>
                          <p className='font-semibold'>{job.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className='flex gap-2 mt-14 text-sm'>
                {languages.length > 0 && (
                  <div className='flex-[0.5] flex-col'>
                    <h3 className='text-[#363636] m-0 uppercase font-black'>
                      Languages
                    </h3>
                    {languages.map(({ language }) => (
                      <p key={language} className='font-semibold'>
                        {language}
                      </p>
                    ))}
                  </div>
                )}
                {certificates.length > 0 && (
                  <div className='flex-[1.75] flex flex-col gap-3'>
                    <h3 className='text-[#363636] m-0 uppercase font-black'>
                      Certificates
                    </h3>
                    {certificates.map((certificate) => (
                      <div
                        key={certificate.name}
                        className='flex flex-col font-black uppercase'
                      >
                        <span>
                          {getMonthAbbreviatedAndYear(certificate.date)}
                        </span>
                        <a
                          className='text-[#363636] underline underline-offset-2'
                          href={certificate.url}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {certificate.name}
                        </a>
                        <span>{certificate.issuer}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
    </Layout>
  )
}
