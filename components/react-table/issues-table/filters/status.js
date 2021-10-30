import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Status = () => {

  return (
    <Form.Group as={Col} controlId="status">
      <Form.Label>Status</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value=""></option>
        <option value="open">Open</option>
        <option value="cloced">Cloced</option>
      </Form.Select>
    </Form.Group >
  )
}
export default Status