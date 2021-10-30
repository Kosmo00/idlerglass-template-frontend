import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const InitialDate = () => {

  return (
    <Form.Group as={Col} controlId="initialDate">
      <Form.Label>Initial Date</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
  )
}
export default InitialDate