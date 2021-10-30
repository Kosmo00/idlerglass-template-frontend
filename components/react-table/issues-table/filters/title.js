import { FILTER_TITLE } from '../issues-table-reducer'

// react-bootstrap components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Title = ({ filtersDispatch, state }) => {

  const handleChange = ev => {
    filtersDispatch({
      type: FILTER_TITLE,
      value: ev.target.value
    })
  }

  return (
    <Form.Group as={Col} controlId="Title">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Title" onChange={handleChange} value={state} />
    </Form.Group>
  )
}
export default Title