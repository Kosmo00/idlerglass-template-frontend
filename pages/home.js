import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../components/Layout'
import withSession from '../services/auth/sesion'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Home = ({ organizations }) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} lg={10}>
            <Card>
              <Card.Header>
                <h2>Your Organizations</h2>
              </Card.Header>
              <Card.Body>
                {organizations.map(organization => {
                  return (
                    <div>
                      <Link href={`/org/${organization.name}`}><a>{organization.name}</a></Link>
                    </div>
                  )
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  let organizations = null
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