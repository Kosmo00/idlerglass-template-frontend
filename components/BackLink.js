import Link from 'next/link'
import { BsGrid3X3GapFill, BsArrowLeftCircleFill } from 'react-icons/bs';

// react-bootstrap components

const BackLink = ({ destination }) => {

  return (
    <div className='backLink-div'>
      <Link href={destination}>
        <a className='customLink'><BsArrowLeftCircleFill /></a>
      </Link>
    </div>
  )
}
export default BackLink