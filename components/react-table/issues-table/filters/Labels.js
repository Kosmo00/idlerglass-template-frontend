import { FILTER_LABELS } from '../issues-table-reducer'

// react-bootstrap components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Labels = ({ labels, filtersDispatch, state }) => {

  return (
    <Form.Group as={Col} controlId="Labels">
      <Form.Label>Label</Form.Label>
      <Form.Select
        multiple
        aria-label="Default select example"
      >
        <option value=""></option>
        {labels.map((label, index) => {
          return (
            <option value={label.name} key={label.name + index}>{label.name}</option>
          )
        }
        )
        }
      </Form.Select>
    </Form.Group>
  )
}
export default Labels