import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'

const ReposCardBody = ({ repos, orgName }) => {

  return (
    <>
      {repos.map(repo => {
        return (
          <div key={repo.name}>
            <Link href={`/${orgName}/${repo.name}`}>
              <a className='customLink text-capitalize mr-1'>{repo.name}</a>
            </Link>
            <span className='Badge'>
              {
                repo.privacity ?
                  <Badge pill bg='danger'>
                    private
                  </Badge>
                  :
                  <Badge pill bg='primary'>
                    public
                  </Badge>
              }
            </span>
          </div>
        )
      })}
    </>
  )
}
export default ReposCardBody