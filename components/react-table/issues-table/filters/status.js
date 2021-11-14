import { FILTER_STATUS } from '../issues-table-reducer'
import Select from 'react-select';

// react-bootstrap components
import Form from 'react-bootstrap/Form'


const Status = ({ filtersDispatch, state }) => {

  const options = [
    { value: '', label: 'All' },
    { value: 'open', label: 'open' },
    { value: 'closed', label: 'closed' },
  ]

  const handleChange = selectedOption => {
    filtersDispatch({
      type: FILTER_STATUS,
      value: selectedOption.value
    })
  }
  return (
    <Form.Group controlId='select-status'>
      <Form.Label for='select-status'>Status</Form.Label>
      <Select
        defaultValue={''}
        value={state}
        onChange={handleChange}
        options={options}
        isSearchable
        instanceId="long-value-select"
      />
    </Form.Group >
  )
}
export default Status