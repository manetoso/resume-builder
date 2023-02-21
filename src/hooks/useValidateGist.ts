import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

export const useValidateGist = () => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    if (!inputRef.current || !selectRef.current) return
    const { value } = inputRef.current
    const sleectValue = selectRef.current.value
    const re =
      /[(http(s)?)://(gist.githubusercontent.com/)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)(.json)/
    const isUrl = re.test(value)

    if (!isUrl || sleectValue === '') {
      setError('You must enter a valid raw github gist url and select a resume option')
      return
    }

    inputRef.current.value = ''
    router.push({
      pathname: `/${sleectValue}`,
      query: {
        url: value
      }
    })
  }

  return {
    inputRef,
    selectRef,
    error,
    handleSubmit
  }
}
