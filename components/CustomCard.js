import Link from 'next/link'

// react-bootstrap components
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

const CustomCard = (props) => {

  return (
    <Card className='rounded-3 shadow custom-card border-0'>
      <Card.Header className='cardHeader shadow-sm'>
        <h2 className='cardTitle text-capitalize'>{props.title}</h2>
      </Card.Header>
      <Card.Body>
        {props.elements.map(elem => {
          return (
            <div key={elem.name}>
              <Link href={`/org/${elem.name}`}>
                <a className='customLink text-capitalize mr-1'>{elem.name}</a>
              </Link>
              {elem.privacity &&
                <span className='privacityBadge'>
                  {
                    elem.privacity ?
                      <Badge pill bg='danger'>
                        private
                      </Badge>
                      :
                      <Badge pill bg='primary'>
                        public
                      </Badge>
                  }
                </span>
              }
            </div>
          )
        })}
      </Card.Body>
    </Card>
  )
}
export default CustomCard