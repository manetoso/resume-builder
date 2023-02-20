import { GistResponse } from '@/interfaces/gistResponse'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useFetchGistData = () => {
  const router = useRouter()
  const [resumeData, setResumeData] = useState<GistResponse>({
    basics: null,
    awards: [],
    certificates: [],
    education: [],
    languages: [],
    skills: [],
    work: []
  })
  const [isLoading, setIsLoading] = useState(true)

  const handleFetch = async (url: string) => {
    try {
      setIsLoading(true)
      const resp = await fetch(url)
      const data: GistResponse = await resp.json()
      setResumeData(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const url = router.query?.url as string
    handleFetch(url)
  }, [router.query])

  return {
    isLoading,
    resumeData
  }
}
