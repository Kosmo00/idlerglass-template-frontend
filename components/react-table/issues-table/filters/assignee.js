import { useRef } from 'react'
import Select from 'react-select'

import { FILTER_ASSIGNEE } from '../issues-table-reducer'

// react-bootstrap components
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


const Assignee = ({ collaborators, filtersDispatch, state }) => {
  const collaborator = (value) => {
    return (
      <span>
        <img src={value.avatar} height={32} width={32} className='rounded-circle'></img>{`${value.username}  `}
      </span>
    )
  }
  const options = collaborators.map(collab => (
    { value: collab.username, label: collaborator(collab) }
  ))
  options.unshift({ value: '', label: 'All' })

  const ref = useRef(null)

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
        ref={ref}
        defaultValue={state}
        onChange={handleChange}
        options={options}
        instanceId='select-assignee'
        isSearchable
        id='select-assignee'
      />
    </Form.Group>
  )
}
export default Assignee
