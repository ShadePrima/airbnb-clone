'use client'

interface containerProps {
  children: React.ReactNode
}

const Container: React.FC<containerProps> = ({ children }) => {
  return (
    <div
      className='
        max-w-[2520]
        mx-auto
        xl:px-20
        md:px-2
        px-4
  '
    >
      {children}
    </div>
  )
}

export default Container
