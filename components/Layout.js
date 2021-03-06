import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Navb from '../components/Nav'

import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { FaHome } from 'react-icons/fa';

const Layout = ({ children }) => {
  const router = useRouter()
  const [path, setPath] = useState('')
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    setPath(router.asPath)
    setRoutes(path.split('/'))
  }, [path])

  return (
    <>
      <Head>
        <title>Github Reports</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navb />
      {(router.pathname !== '/' && router.pathname !== '/login' && router.pathname !== '404') &&
        <Container className='breadCrumb-container' fluid bg='dark'>
          <Breadcrumb className='breadCrumb'>
            <Breadcrumb.Item className='breadCrumb-item' href='/'><FaHome /></Breadcrumb.Item>
            {routes.map((route, index) => {
              let routeEnd = path.indexOf(route) + route.length
              let href = path.slice(0, routeEnd)
              return (
                <React.Fragment key={`${route} ${index}`}>
                  {(route !== '') &&
                    <Breadcrumb.Item
                      className={`breadCrumb-item ${href === router.asPath ? 'active' : ''}`}
                      href={href}
                    >
                      {route}
                    </Breadcrumb.Item>
                  }
                </React.Fragment>
              )
            }
            )
            }
          </Breadcrumb>
        </Container>
      }
      <Container className='layout-container'>
        {children}
      </Container>
    </>
  )
}
export default Layout