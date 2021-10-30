import { FILTER_STATUS } from '../issues-table-reducer'

// react-bootstrap components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Status = ({ filtersDispatch, state }) => {

  const handleChange = ev => {
    filtersDispatch({
      type: FILTER_STATUS,
      value: ev.target.value
    })
  }
  return (
    <Form.Group as={Col} controlId="status">
      <Form.Label>Status</Form.Label>
      <Form.Select
        value={state}
        onChange={handleChange}
        aria-label="Default select example"
      >
        <option value=""></option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
      </Form.Select>
    </Form.Group >
  )
}
export default Status