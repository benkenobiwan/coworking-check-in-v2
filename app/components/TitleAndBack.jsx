import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
const TitleAndBack = ({ title, path }) => {
  return (
    <div className='grid grid-cols-3 items-center capitalize text-3xl'>
      <div className='justify-self-start'>
        <Link href={path || '..'} className='link'>
          <IoMdArrowRoundBack />
        </Link>
      </div>
      <h1 className='justify-self-center'>{title}</h1>
    </div>
  )
}
export default TitleAndBack
