import { FILTER_ASSIGNEE } from '../issues-table-reducer'

import Select from 'react-select';

// react-bootstrap components
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Assignee = ({ collaborators, filtersDispatch, state }) => {
  const options = collaborators.map(collab => (
    { value: collab.username, label: collaborator(collab) }
  ))
  options.unshift({ value: '', label: 'All' })
  function collaborator(value) {
    return (
      <span>
        {`${value.username}  `}<img src={value.avatar} height={32} width={32} className='rounded-circle'></img>
      </span>
    )
  }

  const handleChange = selectedOption => {
    filtersDispatch({
      type: FILTER_ASSIGNEE,
      value: selectedOption.value
    })
  }
  return (
    <Form.Group as={Col} controlId="assignee">
      <Form.Label>Assignee</Form.Label>
      <Select
        defaultValue=''
        onChange={handleChange}
        options={options}
        isSearchable
      />
    </Form.Group>
  )
}
export default Assignee
