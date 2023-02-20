import Head from 'next/head'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Dev Resume Builder</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
      </Head>
      {children}
    </>
  )
}
