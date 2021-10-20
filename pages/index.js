import withLayout from '../components/Layout'
import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <main className='landing justify-content-end'>
        <a href='https://github.com/login/oauth/authorize?client_id=44e6bde78645589b252a&scope=admin:org,repo,user,read:packages,read:discussion'>
          <div className='btn btn-primary btn-lg px-4 fs-3'>Login</div>
        </a>
      </main>
    </React.Fragment>
  )
}
export default withLayout(Home)