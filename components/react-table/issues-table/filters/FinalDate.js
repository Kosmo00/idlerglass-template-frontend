import { FILTER_FINAL_DATE } from '../issues-table-reducer'

// react-bootstrap components
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const FinalDate = ({ filtersDispatch, state }) => {
  const handleChange = ev => {
    filtersDispatch({
      type: FILTER_FINAL_DATE,
      value: ev.target.value
    })
  }
  return (
    <Form.Group as={Col} controlId="finalDate">
      <Form.Label>Closed Final Date</Form.Label>
      <Form.Control value={state} onChange={handleChange} type="date" />
    </Form.Group>
  )
}
export default FinalDate