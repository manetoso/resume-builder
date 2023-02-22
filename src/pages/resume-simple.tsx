import { Layout, PrintButton } from '@/components'
import {
  Awards,
  Certificates,
  Education,
  Header,
  Languages,
  Links,
  Row,
  Skills,
  Work
} from '@/components/resumes/resume-simple'

import { useFetchGistData } from '@/hooks/useFetchGistData'

export default function Resume() {
  const { resumeData } = useFetchGistData()
  const { basics, work, skills, education, languages, certificates, awards } =
    resumeData

  return (
    <Layout>
      <PrintButton />
      <main id='section-to-print' className='flex flex-col gap-2'>
        {basics !== null && <Header {...basics} />}

        {work.length > 0 && (
          <Row display='flex' id='work' title='Experience'>
            <Work work={work} />
          </Row>
        )}

        {skills.length > 0 && (
          <Row display='grid' id='skilld' title='Skills' gridCols={4}>
            <Skills skills={skills} />
          </Row>
        )}

        {awards.length > 0 && (
          <Row display='grid' id='awards' title='Awards' gridCols={4}>
            <Awards awards={awards} />
          </Row>
        )}

        {education.length > 0 && (
          <Row display='grid' id='education' title='Education' gridCols={3}>
            <Education education={education} />
          </Row>
        )}

        {certificates.length > 0 && (
          <Row
            display='grid'
            id='certificates'
            title='Certificates'
            gridCols={3}
          >
            <Certificates certificates={certificates} />
          </Row>
        )}

        <div className='flex justify-between'>
          {basics?.profiles && (
            <Row display='flex' id='links' title='Links'>
              <Links {...basics} />
            </Row>
          )}

          {languages.length > 0 && (
            <Row
              display='flex'
              id='languages'
              title='Languages'
              textAlign='right'
            >
              <Languages languages={languages} />
            </Row>
          )}
        </div>
      </main>
    </Layout>
  )
}
