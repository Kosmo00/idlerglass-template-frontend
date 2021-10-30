
// react-bootstrap components
import Card from 'react-bootstrap/Card'

const CardShell = ({ title, children }) => {

  return (
    <Card className='rounded-3 shadow custom-card border-0'>
      <Card.Header className='cardHeader shadow-sm'>
        <h2 className='cardTitle text-capitalize'>{title}</h2>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  )
}
export default CardShell