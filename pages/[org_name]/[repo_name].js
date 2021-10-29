import React, { useMemo } from 'react'
import axios from 'axios'

import withAuth from '../../middlewares/withAuth'
import Layout from '../../components/Layout'
import { COLUMNS } from '../../components/react-table/issues-table/columns'

// react-table
import { useTable, useFilters } from 'react-table'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const Repo = ({ repo }) => {
  const { name, collaborators, issues, labels } = repo

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => issues, [])

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useFilters
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance

  return (
    <Layout>
      <Container fluid className='d-flex flex-column home mt-5'>
        <Row className='justify-content-center'>
          <Col>
            <h2>{name} repo issues</h2>
            {
              !issues ?
                <h2 className='text-center mt-5'>We have not found Issues</h2>
                :
                <Table striped bordered hover {...getTableProps()}>
                  <thead>
                    {
                      headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {
                            headerGroup.headers.map(column => (
                              <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                              </th>
                            ))
                          }
                        </tr>
                      ))
                    }
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {
                            row.cells.map(cell => (
                              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))
                          }
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const { user } = context
  const { repo_name, org_name } = context.query

  let repo = {}
  try {
    const response = await axios.get(`http://localhost:4000/${org_name}/repo/${repo_name}`, {
      headers: {
        'x-token': user.token
      }
    })
    repo = response.data
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