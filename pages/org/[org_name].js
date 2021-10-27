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

const Organization = ({ repos, org_name }) => {
  let Component = ''

  if (repos.length === 0) {
    Component = <h2 className='text-center mt-5'>We have not found repositories associated with {org_name} organization</h2>
  } else {
    Component = <CustomCard elements={repos} title={org_name} kind_of_link={1} />
  }
  return (
    <Layout>
      <Container fluid className='d-flex flex-column home'>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10}>
            {Component}
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
  const { org_name } = context.query

  let repos = []
  try {
    const response = await axios.get(`http://localhost:4000/${org_name}/repos`, {
      headers: {
        'x-token': user.token
      }
    })
    repos = response.data
  }
  catch (err) {
    console.log(err)
  }
  return {
    props: {
      repos,
      org_name
    }
  }
})

export default Organization
