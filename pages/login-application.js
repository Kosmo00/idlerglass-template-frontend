import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'

import ClipLoader from "react-spinners/ClipLoader";

//bootstrap componets
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import useUser from '../services/auth/useUser'
import useFetch from '../services/fetchers/useFetch';


const LoginApplication = () => {

  const { mutateUser } = useUser()

  const router = useRouter()
  const { code } = router.query
  const [message, setMessage] = useState('')
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (code) {
      const body = {
        code
      }
      axios.post('http://localhost:4000/', body).then(res => {
        setLoading(false)
        login(res.data.user)
      }).catch(err => {
        setLoading(false)
        console.log(err.response.data)
        if (err.response.status === 401) {
          setMessage(err.response.data.message)
        }
        else setMessage('Unknown error')
      })
    }
  }, [code])

  const login = async user => {
    try {
      mutateUser('/api/user', await useFetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }))
    } catch (err) {
      console.log(err)
    }
    router.push('/')
  }

  return (
    <div className='pt-5'>
      <Container className='d-flex flex-column '>
        {message &&
          <Alert variant='danger'>
            {`${message} `}
            {message !== 'Unknown error' &&
              <Alert.Link href='https://github.com/login/oauth/authorize?client_id=44e6bde78645589b252a&scope=admin:org,repo,user,read:packages,read:discussion'>
                Try again
              </Alert.Link>
            }
          </Alert>
        }
        <div className='d-flex flex-column align-items-center h3'>
          Fetching token from Github
          <ClipLoader loading={loading} size={150} />
        </div>
      </Container>
    </div>
  )
}

export default LoginApplication
