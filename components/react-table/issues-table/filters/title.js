import React, { useState } from 'react'

const TitleFilter = ({ column }) => {
  const { setFilter } = column
  console.log(column)
  const [title, setTitle] = useState('')
  const handleChange = (ev) => {
    setTitle(ev.target.value)
  }
  return (
    <span>
      Search: {''}
      <input type='text'
        value={title}
        onChange={handleChange}
      />

    </span>
  )
}

export default TitleFilter