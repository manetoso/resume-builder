import { Layout } from '@/components/Layout'
import { PrintButton } from '@/components/PrintButton'
import { useFetchGistData } from '@/hooks/useFetchGistData'
import { deleteWWW, getMonthAndYear } from '@/utils/utils'

export default function Resume() {
  const { resumeData } = useFetchGistData()
  const { basics, work, skills, education, languages, certificates, awards } =
    resumeData

  return (
    <Layout>
      <PrintButton />
      <main>
        <span className='fixed bg-emerald-800 text-white p-2'>
          Sample Resume
        </span>
        <div id='section-to-print' className='flex flex-col gap-6'>
          {basics !== null && (
            <section id='basics' className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col flex-[1.5]'>
                  <span id='name' className='font-black text-7xl'>
                    {basics.name}
                  </span>
                  <span id='position' className='text-4xl'>
                    {basics.label}
                  </span>
                </div>
                <div className='text-right flex-[1]'>
                  <ul id='contact' className='flex flex-col gap-2'>
                    <li>
                      <a
                        className='font-light text-zinc-600 underline underline-offset-2'
                        href={`tel:${basics.phoneUrl}`}
                      >
                        {basics.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        className='font-light text-zinc-600 underline underline-offset-2'
                        href={`mailto:${basics.email}`}
                      >
                        {basics.email}
                      </a>
                    </li>
                    <li>
                      {`${basics.location.city}, ${basics.location.region}, ${basics.location.countryCode}`}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p>{basics.summary}</p>
              </div>
            </section>
          )}

          {work.length > 0 && (
            <section className='flex flex-col gap-4'>
              <p className='font-medium text-2xl'>Experience</p>
              <div className='flex flex-col gap-3'>
                {work.map((job) => (
                  <div key={job.name} className='flex flex-col gap-2'>
                    <div className='flex justify-between items-start'>
                      <div className='flex flex-col'>
                        <span className='font-bold text-lg'>
                          {job.position}
                        </span>
                        <span className='flex gap-2 text-zinc-600 font-light text-sm'>
                          <a
                            className='text-zinc-600 underline underline-offset-2'
                            href={job.url}
                            target='_blank'
                            rel='noreferrer'
                          >
                            {job.name}
                          </a>
                          {job.location}
                        </span>
                      </div>
                      <div>
                        <span className='text-zinc-600 font-light text-sm'>
                          {getMonthAndYear(job.startDate)} -{' '}
                          {job.endDate
                            ? getMonthAndYear(job.startDate)
                            : 'Present'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>{job.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section className='flex flex-col gap-4'>
              <p className='font-medium text-2xl'>Skills</p>
              <div className='flex justify-between flex-wrap'>
                {skills.map((skill) => (
                  <div key={skill.name} className='flex flex-col'>
                    <span className='font-bold text-lg'>{skill.name}</span>
                    <p className='flex gap-1 text-zinc-600 font-light'>
                      {skill.keywords.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section className='flex flex-col gap-4'>
              <p className='font-medium text-2xl'>Education</p>
              <div className='flex flex-col gap-3'>
                {education.map((entry, index) => (
                  <div key={index}>
                    <p>
                      <strong>{entry.studyType}</strong>, {entry.area}
                    </p>
                    <a
                      className='font-light text-zinc-600 underline underline-offset-2'
                      href={entry.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {entry.institution}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {awards.length > 0 && (
            <section className='flex flex-col gap-4'>
              <p className='font-medium text-2xl'>Awards</p>
              <div className='flex justify-between flex-wrap'>
                {awards.map((award) => (
                  <div key={award.title}>
                    <p id='award-title' className='font-bold'>
                      {award.title}
                    </p>
                    <span id='awarder'>
                      {award.awarder} - {getMonthAndYear(award.date)}
                    </span>
                    <p id='summary' className='font-light text-zinc-600 italic'>
                      {award.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {certificates.length > 0 && (
            <section className='flex flex-col gap-4'>
              <p className='font-medium text-2xl'>Certificates</p>
              <div className='flex flex-col gap-3'>
                {certificates.map((certificate) => (
                  <div key={certificate.name}>
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
              </div>
            </section>
          )}

          <section className='flex justify-between'>
            {languages.length > 0 && (
              <div className='flex flex-col gap-4'>
                <p className='font-medium text-2xl'>Languages</p>
                <ul className='flex flex-col gap-1'>
                  {languages.map((language) => (
                    <li key={language.language}>
                      {language.language} · {language.fluency}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {basics?.profiles && (
              <div className='flex flex-col gap-4'>
                <p className='font-medium text-2xl text-right'>Links</p>
                <ul className='text-right'>
                  {basics.url && (
                    <li>
                      <a
                        className='font-light text-zinc-600 underline underline-offset-2'
                        href={basics.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <strong>{deleteWWW(basics.url)}</strong>
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
              </div>
            )}
          </section>
        </div>
      </main>
    </Layout>
  )
}
