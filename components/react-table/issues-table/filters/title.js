import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Title = () => {

  return (
    <Form.Group as={Col} controlId="Title">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Title" />
    </Form.Group>
  )
}
export default Title