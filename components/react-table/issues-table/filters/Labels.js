import { FILTER_LABELS } from '../issues-table-reducer'
import Select from 'react-select';

import Label from '../../../StatusLabel'

// react-bootstrap components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Labels = ({ labels, filtersDispatch, state }) => {
  const options = labels.map(lab => (
    { value: lab.name, label: span(lab) }
  ))
  function span(value) {
    return (
      <Label value={value} />
    )
  }
  const handleChange = selectedOption => {
    filtersDispatch({
      type: FILTER_LABELS,
      value: selectedOption.map(opt => (opt.value))
    })
  }
  return (
    <Form.Group as={Col} controlId="Labels">
      <Form.Label>Label</Form.Label>
      <Select
        defaultValue=''
        onChange={handleChange}
        options={options}
        isMulti
        isSearchable
      />
    </Form.Group>
  )
}
export default Labels