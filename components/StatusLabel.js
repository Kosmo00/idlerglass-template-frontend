
const Label = ({ value }) => {
  return (
    <span
      className='text-nowrap d-inline-block my-2'
      style={{
        backgroundColor: `#${value.color}`,
        color: parseInt(value.color, 16) <= parseInt('ffffff', 16) / 8 * 7 ? '#fff' : '',
        marginLeft: 5,
        padding: '2px 7px',
        borderRadius: '2em',
        fontSize: 12
      }}>{value.name}
    </span>
  )
}
export default Label