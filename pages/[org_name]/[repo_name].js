import React, { useMemo } from 'react'
import axios from 'axios'

import withAuth from '../../middlewares/withAuth'
import Layout from '../../components/Layout'
import { COLUMNS } from '../../components/react-table/issues-table/columns'
import useIssuesTableReducer, { FILTER_TITLE } from '../../components/react-table/issues-table/issues-table-reducer'

// react-table
import { useTable } from 'react-table'

// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const Repo = ({ repo }) => {
  const { name, collaborators, issues, labels } = repo

  const [state, dispatch] = useIssuesTableReducer(issues)
  console.log(state)
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => state, [])
  const tableInstance = useTable(
    {
      columns,
      data
    },
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
      <Container fluid className='d-flex flex-column home'>
        <Row className='justify-content-center'>
          <Col>
            <h2 className='text-capitalize tableTitle'>{name} repo issues</h2>

            {
              !issues ?
                <h2 className='text-center mt-5'>We have not found Issues</h2>
                :
                <Container fluid className='Table-container'>
                  <Table striped hover {...getTableProps()} className='Table shadow-lg'>
                    <thead className='shadow-sm'>
                      {
                        headerGroups.map(headerGroup => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                              headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className='px-3 py-3 border-bottom-0'>{column.render('Header')}</th>
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
                                <td {...cell.getCellProps()} className='px-3'>{cell.render('Cell')}</td>
                              ))
                            }
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </Container>
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