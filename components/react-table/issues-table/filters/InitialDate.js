import { FILTER_INITIAL_DATE } from '../issues-table-reducer'

// react-bootstrap components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const InitialDate = ({ filtersDispatch, state }) => {

  const handleChange = ev => {
    filtersDispatch({
      type: FILTER_INITIAL_DATE,
      value: ev.target.value
    })
  }
  return (
    <Form.Group as={Col} controlId="initialDate">
      <Form.Label>Closed Initial Date</Form.Label>
      <Form.Control
        value={state}
        onChange={handleChange}
        type="date"
      />
    </Form.Group>
  )
}
export default InitialDate