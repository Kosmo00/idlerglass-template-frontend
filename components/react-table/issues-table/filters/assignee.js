import { FILTER_ASSIGNEE } from '../issues-table-reducer'

// react-bootstrap components
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Assignee = ({ collaborators, filtersDispatch, state }) => {

  const handleChange = ev => {
    filtersDispatch({
      type: FILTER_ASSIGNEE,
      value: ev.target.value
    })
  }
  return (
    <Form.Group as={Col} controlId="assignee">
      <Form.Label>Assignee</Form.Label>
      <Form.Select
        value={state}
        onChange={handleChange}
        aria-label="Default select example"
      >
        <option value=""></option>
        {collaborators.map((collaborator, index) => {
          return (
            <option value={collaborator.username} key={collaborator.username + index}>{collaborator.username}</option>
          )
        }
        )
        }
      </Form.Select>
    </Form.Group>
  )
}
export default Assignee
