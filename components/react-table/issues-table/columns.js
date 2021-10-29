import Badge from 'react-bootstrap/Badge'
import TitleFilter from './filters/title'

export const COLUMNS = [
  {
    Header: 'Title',
    accessor: 'basic_data',
    Cell: ({ value: values }) => {
      return (
        <>
          <p className='text-break'>
            {values.title}
            <Badge pill bg={values.closed_at ? 'danger' : 'primary'}>
              {values.state}
            </Badge>
          </p>
        </>
      )
    },
    Filter: TitleFilter,
  },
  {
    Header: 'Labels',
    accessor: 'labels',
    Cell: ({ value: values }) => {
      return values.map(value => (
        <span key={value.name} className='text-nowrap d-inline-block'
          style={{
            backgroundColor: `#${value.color}`,
            color: parseInt(value.color, 16) <= parseInt('ffffff', 16) / 8 * 7 ? '#fff' : '',
            marginLeft: 5,
            padding: '2px 7px',
            borderRadius: '2em',
            fontSize: 12
          }}>
          {value.name}
        </span>
      )
      )
    },
    disableFilters: true
  },
  {
    Header: 'Assignee',
    accessor: 'assignee',
    Cell: ({ value }) => {
      return (
        <>
          {
            value.username &&
            <a href={`https://github.com/${value.username}/`}>
              <img src={value.avatar} height={32} width={32} className='rounded-circle'></img>
              {value.username}
            </a>
          }

        </>
      )
    },
    disableFilters: true
  },
]