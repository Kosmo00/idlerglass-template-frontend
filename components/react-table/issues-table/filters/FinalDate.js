import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const FinalDate = () => {

  return (
    <Form.Group as={Col} controlId="finalDate">
      <Form.Label>Final Date</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
  )
}
export default FinalDate