interface Props {
  children: JSX.Element | JSX.Element
  display: 'flex' | 'grid'
  gridCols?: 3 | 4 // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none'
  id: string
  textAlign?: 'right' | 'left'
  title: string
}

export function Row({
  children,
  display,
  id,
  title,
  gridCols,
  textAlign = 'left'
}: Props) {
  const displayMethod =
    display === 'flex'
      ? `${display} flex-col`
      : `${display} grid-cols-${gridCols}`
  return (
    <section id={id} className={`flex flex-col gap-1 text-${textAlign}`}>
      <p className='font-black text-xl'>{title}</p>
      <div className={`gap-2 ${displayMethod}`}>{children}</div>
    </section>
  )
}
