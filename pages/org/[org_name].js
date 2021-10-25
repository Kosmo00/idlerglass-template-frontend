import React from 'react'
import Link from 'next/link'
import axios from 'axios'

import withAuth from '../../middlewares/withAuth'
import Layout from '../../components/Layout'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

const Organization = ({ repos, org_name }) => {
  return (
    <Layout>
      <Container className='pt-5'>
        <Row>
          <Col xs={12} lg={10}>
            <Card>
              <Card.Header>
                <h2>{org_name} repos</h2>
              </Card.Header>
              <Card.Body>
                {repos.map(repo => {
                  return (
                    <div key={`${org_name}/${repo.name}`}>
                      <Link href={`/org/${repo.name}`}><a>{repo.name}</a></Link>
                      <span
                        style={{
                          fontSize: 12,
                        }}>
                        {
                          repo.privacity ?
                            <Badge pill bg='danger'>
                              private
                            </Badge>
                            :
                            <Badge pill bg='primary'>
                              public
                            </Badge>
                        }
                      </span>
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
