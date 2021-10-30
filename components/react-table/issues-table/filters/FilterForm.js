
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import Assignee from './Assignee'
import Title from './Title'
import Status from './Status'
import Labels from './Labels'
import InitialDate from './Initial-date'
import FinalDate from './Final-date'

const FilterForm = ({ labels, collaborators }) => {

  return (
    <Form >
      <Row className="mb-3">
        <Title />
        <Status />
        <InitialDate />
        <FinalDate />
        <Labels labels={labels} />
        <Assignee collaborators={collaborators} />
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