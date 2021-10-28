import Link from 'next/link'
import { BsArrowLeftCircleFill } from 'react-icons/bs';

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