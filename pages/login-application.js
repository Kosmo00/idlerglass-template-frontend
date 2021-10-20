import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const LoginApplication = () => {
  const router = useRouter()
  const { code } = router.query

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
      })
    }
    
  }, [code])
  return (
    <div>

    </div>
  )
}

export default LoginApplication
