import Layout from '../components/Layout'
import React from 'react'

import useUser from '../services/auth/useUser'

const Home = () => {
  const { user } = useUser({
    redirectTo: '/home',
    redirectIfFound: true
  })
  console.log(user)
  return (
    <Layout>
      <main className='landing'>
        <a href='https://github.com/login/oauth/authorize?client_id=44e6bde78645589b252a&scope=admin:org,repo,user,read:packages,read:discussion'>
          <div className='btn btn-primary btn-lg px-4 fs-3'>Login</div>
        </a>
      </main>
    </Layout>
  )
}
export default Home