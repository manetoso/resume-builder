import { Layout, PrintButton } from '@/components'
import {
  Awards,
  Certificates,
  Education,
  Header,
  Languages,
  Skills,
  Table,
  TablesContainer,
  Work
} from '@/components/resumes/resume-news'

import { useFetchGistData } from '@/hooks/useFetchGistData'

export default function Resume() {
  const { resumeData } = useFetchGistData()
  const { basics, work, skills, education, languages, certificates, awards } =
    resumeData

  return (
    <Layout>
      <PrintButton />
      <main id='section-to-print' className='flex flex-col gap-6'>
        {basics !== null && <Header {...basics} />}
        <TablesContainer>
          <>
            {work.length > 0 && (
              <Table title='Work Experience'>
                <Work work={work} />
              </Table>
            )}
            {awards.length > 0 && (
              <Table title='Awards'>
                <Awards awards={awards} />
              </Table>
            )}
            {languages.length > 0 && (
              <Table title='Languages'>
                <Languages languages={languages} />
              </Table>
            )}
          </>
          <>
            {education.length > 0 && (
              <Table title='Education'>
                <Education education={education} />
              </Table>
            )}
            {skills.length > 0 && (
              <Table title='Skills'>
                <Skills skills={skills} />
              </Table>
            )}
            {certificates.length > 0 && (
              <Table title='Certificates'>
                <Certificates certificates={certificates} />
              </Table>
            )}
          </>
        </TablesContainer>
      </main>
    </Layout>
  )
}
