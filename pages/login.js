import Layout from '../components/Layout'
import React from 'react'

import withSession from '../services/auth/sesion'

const Home = () => {
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
export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user')

  if (!user) {
    return {
      props: {}
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
})
export default Home