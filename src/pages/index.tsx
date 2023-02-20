import { Layout } from '@/components/Layout'
import { GistInput } from '@/components/GistInput'

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>Dev Resume Builder</h1>
        <GistInput />
      </main>
    </Layout>
  )
}
