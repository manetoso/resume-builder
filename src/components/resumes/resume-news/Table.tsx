interface Props {
  children: JSX.Element | JSX.Element[]
  title: string
}

export function Table({ children, title }: Props) {
  return (
    <div className=' lex flex-col border-t-2 border-b-[1px] border-[#363636] pb-4'>
      <h3 className='text-[#363636] font-black text-sm uppercase m-0 border-b-2 border-[#363636]'>
        {title}
      </h3>
      <ul className='flex flex-col gap-2'>{children}</ul>
    </div>
  )
}
