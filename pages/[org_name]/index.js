import React from 'react'
import axios from 'axios'

import withAuth from '../../middlewares/withAuth'
import Layout from '../../components/Layout'
import CardSell from '../../components/CardShell'
import ReposCardBody from '../../components/ReposCardBody'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Organization = ({ repos, org_name }) => {
  let Component = ''
  const cardBody = <ReposCardBody repos={repos} orgName={org_name} />

  if (repos.length === 0) {
    Component = <h2 className='text-center'>We have not found repositories associated with {org_name} organization</h2>
  } else {
    Component = <CardSell title={`${org_name} repos`} children={cardBody} />
  }
  return (
    <Layout>
      <Container fluid className='d-flex flex-column home'>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10}>
            {Component}
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
