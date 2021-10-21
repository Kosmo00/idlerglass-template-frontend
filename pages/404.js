import Layout from '../components/Layout'

import Link from 'next/link'

export default function Custom404() {

  return (
    <Layout>
      <main className='landing text-center'>
        <h1>404 | Page Not Found</h1>
        <h3>The page you are looking for couldn't be found, do you want to go back to {' '}
          <Link href='/'><a className='customLink'>Home</a></Link>?
        </h3>
      </main>
    </Layout>
  )
}