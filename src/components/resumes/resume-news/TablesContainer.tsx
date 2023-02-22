interface Props {
  children: JSX.Element[]
}

export function TablesContainer({ children }: Props) {
  const [left, right] = children
  return (
    <div className='flex gap-4'>
      <section className='flex-1 flex flex-col gap-6'>{left}</section>
      <section className='flex-1 flex flex-col gap-6'>{right}</section>
    </div>
  )
}
