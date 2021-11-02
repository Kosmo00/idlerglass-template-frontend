import { FILTER_STATUS } from '../issues-table-reducer'
import Select from 'react-select';

// react-bootstrap components
import Form from 'react-bootstrap/Form'

const options = [
  { value: '', label: 'All' },
  { value: 'open', label: 'open' },
  { value: 'closed', label: 'closed' },
];
const Status = ({ filtersDispatch, state }) => {

  const handleChange = selectedOption => {
    console.log(selectedOption)
    filtersDispatch({
      type: FILTER_STATUS,
      value: selectedOption.value
    })
  }
  return (
    <Form.Group controlId="status">
      <Form.Label>Status</Form.Label>
      <Select
        defaultValue={''}
        onChange={handleChange}
        options={options}
        isSearchable
      />
    </Form.Group >
  )
}
export default Status