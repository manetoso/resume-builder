import { useValidateGist } from '../hooks/useValidateGist'

export function GistInput() {
  const { inputRef, selectRef, error, handleSubmit } = useValidateGist()
  return (
    <form onSubmit={handleSubmit}>
      <label>Add your raw github gist url to read your resume form json</label>
      <input
        ref={inputRef}
        className='w-full'
        defaultValue='https://gist.githubusercontent.com/manetoso/5ae468751c1a91cd536bef92eecc8f27/raw/e0c1348602cb97d670896fb88f593a0570cb5d48/resume-test.json'
        placeholder='https://gist.githubusercontent.com/manetoso/9bf0daf8e8f1588ffaf2cc141d5fb42e/raw/dc793b15e5e8488d9e4d1230400f7e838313b9e2/resume.json'
      />
      <select ref={selectRef}>
        <option value=''>Select an Option</option>
        <option value='resume-simple'>Simple Resume</option>
        <option value='resume-anime'>Anime like Resume</option>
        <option value='resume-news'>News like Resume</option>
        <option value='resume'>Resume test</option>
      </select>
      <div className='flex flex-col'>
        {error !== '' && <span className='text-rose-500'>{error}</span>}
        <button type='submit'>Create Resume</button>
      </div>
    </form>
  )
}
