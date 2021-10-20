import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

//bootstrap componets
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


const LoginApplication = () => {
  const router = useRouter()
  const { code } = router.query
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (code) {
      const body = {
        code
      }
      axios.post('http://localhost:4000/', body).then(res => {
        localStorage.setItem('token', res.data.user.token)
        localStorage.setItem('username', res.data.user.username)
        localStorage.setItem('avatar', res.data.user.avatar)
        console.log(localStorage.getItem('token'))
        router.push('/')
      }).catch(err => {
        console.log(err.response.data)
        setMessage(err.response.data.message)
      })
    }
  }, [code])
  return (
    <div className='pt-5'>
      <Container>
        {message &&
          <Alert variant='danger'>
            {`${message} `}
            <Link href='/'>
              <a className='alert-link'>Back to Home</a>
            </Link>
          </Alert>
        }
      </Container>
    </div>
  )
}

export default LoginApplication
