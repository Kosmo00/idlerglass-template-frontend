import React from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import CardShell from '../components/CardShell'
import OrgsCardBody from '../components/OrgsCardBody'

import withAuth from '../middlewares/withAuth'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = ({ organizations }) => {
  let component = ''
  const cardBody = <OrgsCardBody organizations={organizations} />

  if (organizations.lenght === 0) {
    component = <h2 className='text-center'>We have not found organizations associated with you</h2>
  } else {
    component = <CardShell children={cardBody} title='Your Organizations' />
  }
  return (
    <Layout>
      <Container fluid className='d-flex flex-column home'>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10}>
            {component}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const { user } = context
  let organizations = []
  try {
    const response = await axios.get('http://localhost:4000/organizations', {
      headers: {
        'x-token': user.token
      }
    })
    organizations = response.data

  }
  catch (err) {
    console.log(err)
  }
  return {
    props: {
      organizations
    }
  }
})

export default Home