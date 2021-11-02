
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

const FilterForm = ({ labels, collaborators, filtersDispatch, applyFilters, filters }) => {

  const handleSubmit = (ev) => {
    ev.preventDefault()
    applyFilters()
  }
  return (
    <Form onSubmit={handleSubmit} >
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
          <Button variant="outline-primary" type="submit" className='px-5'>
            Filter
          </Button>
        </Col>
        <Col xs='auto'>
          <Button variant="outline-danger" type="reset" className='px-5'>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default FilterForm