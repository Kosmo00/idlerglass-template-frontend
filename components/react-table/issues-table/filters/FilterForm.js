import { useEffect, useRef } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Assignee from './Assignee'
import Title from './Title'
import Status from './Status'
import Labels from './Labels'
import InitialDate from './InitialDate'
import FinalDate from './FinalDate'

import { RESET_FILTER } from '../issues-table-reducer'

const FilterForm = ({ labels, collaborators, filtersDispatch, applyFilters, filters }) => {

  const handleReset = () => {
    filtersDispatch({
      type: RESET_FILTER
    })
    applyFilters()

  }
  useEffect(() => {
    applyFilters()
  }, [filters])

  return (
    <Form>
      <Row className="mb-4">
        <Col>
          <Row className="mb-3" >
            <Title filtersDispatch={filtersDispatch} state={filters.title} />
          </Row>
          <Row>
            <Status filtersDispatch={filtersDispatch} state={filters.status} />
          </Row>
        </Col>
        <Col>
          <Row className="mb-3" >
            <InitialDate filtersDispatch={filtersDispatch} state={filters.initial_date_closed} />
          </Row>
          <Row>
            <FinalDate filtersDispatch={filtersDispatch} state={filters.final_date_closed} />
          </Row>
        </Col>
        <Assignee collaborators={collaborators} filtersDispatch={filtersDispatch} state={filters.assignee} />
        <Labels labels={labels} filtersDispatch={filtersDispatch} state={filters.labels} />
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col xs='auto'>
          <Button variant="outline-danger" type="reset" className='px-5' onClick={() => handleReset()}>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default FilterForm