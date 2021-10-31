
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
      <Row className="d-flex justify-content-center">
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