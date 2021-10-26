import React from 'react'
import axios from 'axios'

import withAuth from '../../middlewares/withAuth'
import Layout from '../../components/Layout'
import CustomCard from '../../components/CustomCard'
import BackLink from '../../components/BackLink'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Repo = ({ repo }) => {
  let component = ''

  if (!repo) {
    component = <h2 className='text-center mt-5'>We have not found the repository</h2>
  } else {
    component = <h2 className='text-center mt-5'>Hello World</h2>
  }
  return (
    <Layout>
      <Container fluid className='d-flex flex-column home'>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10}>
            {component}
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} lg={10}>
            <BackLink destination='/home' />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const { user } = context
  const org_name = 'idlerglass'
  const { repo_name } = context.query

  let repo = {}
  try {
    const response = await axios.get(`http://localhost:4000/${org_name}/repos/${repo_name}`, {
      headers: {
        'x-token': user.token
      }
    })
    repo = response.data
    console.log(repo)
  }
  catch (err) {
    console.log(err)
  }
  return {
    props: {
      repo
    }
  }
})

export default Repo