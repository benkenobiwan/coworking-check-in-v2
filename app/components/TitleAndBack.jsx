import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
const TitleAndBack = ({ title, path }) => {
  return (
    <div className='flex items-center gap-4'>
      <Link href={path || '..'} className='link'>
        <IoMdArrowRoundBack />
      </Link>
      <h1>{title}</h1>
    </div>
  )
}
export default TitleAndBack
