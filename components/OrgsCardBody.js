
import Link from 'next/link'

const OrgsCardBody = ({ organizations }) => {

  return (
    <>
      {organizations.map(org => {
        return (
          <div key={org.name}>
            <Link href={`/org/${org.name}`}>
              <a className='customLink text-capitalize mr-1'>{org.name}</a>
            </Link>
          </div>
        )
      })}
    </>
  )
}
export default OrgsCardBody