
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
      <Row className="mb-3">
        <Title filtersDispatch={filtersDispatch} state={filters.title} />
        <Status filtersDispatch={filtersDispatch} state={filters.status} />
        <InitialDate filtersDispatch={filtersDispatch} state={filters.initial_date_closed} />
        <FinalDate filtersDispatch={filtersDispatch} state={filters.final_date_closed} />
        <Labels labels={labels} filtersDispatch={filtersDispatch} state={filters.labels} />
        <Assignee collaborators={collaborators} filtersDispatch={filtersDispatch} state={filters.assignee} />
      </Row>
      <Button variant="primary" type="submit">
        Filter
      </Button>
      <Button variant="secondary" type="reset">
        Reset
      </Button>
    </Form>
  )
}
export default FilterForm