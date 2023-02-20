interface ISetFormatOptions {
  day?: 'numeric' | '2-digit'
  weekday?: 'narrow' | 'short' | 'long'
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
  hour?: 'numeric' | '2-digit'
  minute?: 'numeric' | '2-digit'
  second?: 'numeric' | '2-digit'
}

const setFormatOptions = ({
  day,
  hour,
  minute,
  month,
  second,
  weekday,
  year
}: ISetFormatOptions) => {
  return {
    day,
    weekday,
    year,
    month,
    hour,
    minute,
    second
  }
}

export const deleteWWW = (url: string) => {
  const testWww = url.indexOf('www.') === -1 ? 8 : url.indexOf('www.') + 4
  const newUrl = url.substring(testWww, url.length)
  return newUrl
}

export const getMonthAndYear = (stringDate: string) => {
  const date = new Date(stringDate)
  const options = setFormatOptions({
    month: 'long',
    year: 'numeric'
  })
  return date.toLocaleDateString('en-US', options)
}

export const getMonthAbbreviatedAndYear = (stringDate: string) => {
  const date = new Date(stringDate)
  const options = setFormatOptions({
    month: 'short',
    year: 'numeric'
  })
  return date.toLocaleDateString('en-US', options)
}
