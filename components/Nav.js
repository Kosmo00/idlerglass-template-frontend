import { useRouter } from 'next/router'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'

import useUser from '../services/auth/useUser'
import useFetch from '../services/fetchers/useFetch'

const Navb = () => {
  const router = useRouter()
  const { user, mutateUser } = useUser()
  const logout = async ev => {
    ev.preventDefault()
    mutateUser('/api/logout', await useFetch('/api/logout', { method: 'POST' }), false)
    router.push('/')
  }
  console.log(user)

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container >
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="/vercel.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            {
              !user?.isLoggedIn &&
              <Nav.Link href='https://github.com/login/oauth/authorize?client_id=44e6bde78645589b252a&scope=admin:org,repo,user,read:packages,read:discussion'>
                Login
              </Nav.Link>
            }
            {
              user?.isLoggedIn &&

              /*<Nav.Link href='/api/logout' onClick={logout}>
                Logout
              </Nav.Link>*/
              <div className='d-flex flex-nowrap'>

                <NavDropdown
                  title={<img
                    alt="av"
                    src={user.avatar}
                    width="30"
                    height="30"
                    className="d-inline-block rounded-circle"
                  />}
                  id="collasible-nav-dropdown"
                  menuVariant="dark" align="end">
                  <Dropdown.Header>Signed in as {user.username}</Dropdown.Header>
                  <NavDropdown.Item href='/api/logout' onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navb