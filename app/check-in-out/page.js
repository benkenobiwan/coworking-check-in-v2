import Link from 'next/link'
import TitleAndBack from '../components/TitleAndBack'
import UserList from './UserList'
import Button from '../components/Button'

const CheckInOut = async ({ searchParams }) => {
  const direction = searchParams.direction

  const dummy = true
  let response = { data: { users: [...dummyRecords] } }
  if (dummy === false) {
    let status = 'checked-in'
    if (direction === 'in') {
      status = 'checked-out'
    }
    response = await apiFetch.get(`/users/${status}`)
  }

  const allUsers = response.data.users

  return (
    <div className='w-3/4 mx-auto flex flex-col gap-8'>
      <TitleAndBack title={`check ${direction}`} />
      {direction === 'in' && (
        <Button href='../code-of-conduct' className='font-normal'>
          <h4>First time? Register here</h4>
        </Button>
      )}
      <UserList allUsers={allUsers} direction={direction} />
    </div>
  )
}

export default CheckInOut

const dummyRecords = [
  {
    id: 'rec28E9n1y1AVKJiY',
    createdTime: '2024-04-25T00:45:30.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Noah Nightly Noah Nightly Noah Nightly Noah Nightly Noah Nightly Noah Nightly',
    },
  },
  {
    id: 'rec6RP7tUUXgTmTWp',
    createdTime: '2024-04-25T00:45:36.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Olivia Oscar',
    },
  },
  {
    id: 'recAbZO9BlaBM9U8i',
    createdTime: '2024-04-25T00:44:15.000Z',
    fields: {
      Name: 'Emily Ellingsworth',
    },
  },
  {
    id: 'recCXTpTLnhW4bH1C',
    createdTime: '2024-04-25T00:44:49.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Isaac Isaacson',
    },
  },
  {
    id: 'recIVB7oR9dUVjT06',
    createdTime: '2024-04-25T00:46:11.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Theo Tramsworth',
    },
  },
  {
    id: 'recJOzcl5CNkdLXHz',
    createdTime: '2024-04-25T00:46:59.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Yvonne Young',
    },
  },
  {
    id: 'recNje16CP8kkHYjh',
    createdTime: '2024-04-25T00:44:34.000Z',
    fields: {
      Name: 'Grace Goodman',
    },
  },
  {
    id: 'recOj3PZD2vnTpVru',
    createdTime: '2024-04-18T20:53:56.000Z',
    fields: {
      Name: 'Bob Brunhardt',
      Sessions: ['recrBmMnUy8pYWtjd', 'recsWGWmxpdef4vdy', 'recxacPEubSXOrtfU'],
    },
  },
  {
    id: 'recQSya1muDnvNaQ9',
    createdTime: '2024-04-25T00:46:53.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Xavier Xacto',
    },
  },
  {
    id: 'recTUSjfu6jqbXOSU',
    createdTime: '2024-04-18T20:53:56.000Z',
    fields: {
      Name: 'Ben Porter',
      Sessions: [
        'reclau6Tz69zFleUj',
        'reculpYOOhhvt0G7y',
        'recRl2McgWf4Kb8bS',
        'recIUzD3017z8wmkG',
        'recKwRIRX3JtSI0PL',
      ],
    },
  },
  {
    id: 'recV0P2CKqseTqzhY',
    createdTime: '2024-04-25T00:45:55.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Riley Rhinehart',
    },
  },
  {
    id: 'recWhoMyXIwiQP737',
    createdTime: '2024-04-25T00:43:58.000Z',
    fields: {
      Name: 'Charlie Cumberbatch',
      Sessions: ['recAQEGJZoQabLXaw'],
    },
  },
  {
    id: 'recWypCRZjmtUQ4QX',
    createdTime: '2024-04-25T00:45:24.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Mia Morganson',
    },
  },
  {
    id: 'recYWiRjbIQfZuYiO',
    createdTime: '2024-04-25T00:46:46.000Z',
    fields: {
      CheckedIn: true,
      Name: 'William Wilberforce',
    },
  },
  {
    id: 'recYgYra3kRnyqSj2',
    createdTime: '2024-04-25T00:44:24.000Z',
    fields: {
      Name: 'Finn Feinstein',
    },
  },
  {
    id: 'recZxFzNU2QWRxwHa',
    createdTime: '2024-04-25T00:44:56.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Jessica Joyce',
    },
  },
  {
    id: 'recaHQnqYIypehQMt',
    createdTime: '2024-04-25T00:45:02.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Kevin Kavanaugh',
    },
  },
  {
    id: 'recdmtZ180WKHk4Ma',
    createdTime: '2024-04-25T00:45:49.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Quinn Quigley',
    },
  },
  {
    id: 'reclEuKY6rCS4ugDF',
    createdTime: '2024-04-18T20:53:56.000Z',
    fields: {
      Name: 'Alice Allison',
      Sessions: ['recGhFZLAeMM1XgGN', 'rec4kXH7fihMrqBGQ', 'recqdem7fnj2A2bYN'],
    },
  },
  {
    id: 'reclNTXOoof0qQlCr',
    createdTime: '2024-04-25T00:46:17.000Z',
    fields: {
      Name: 'Harper Hexborough',
    },
  },
  {
    id: 'reclU9TtzLt3hm7en',
    createdTime: '2024-04-25T00:44:43.000Z',
    fields: {
      Name: 'Hannah Hill',
    },
  },
  {
    id: 'recmWGp0EpKGXoITI',
    createdTime: '2024-04-25T00:46:02.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Sophia Sotterdale',
    },
  },
  {
    id: 'recshvrmJr6adVZ8Z',
    createdTime: '2024-04-25T00:46:34.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Violet Veras',
    },
  },
  {
    id: 'rectsjHOlY7tbmF4O',
    createdTime: '2024-04-25T00:44:09.000Z',
    fields: {
      Name: 'David Dunnsmore',
      Sessions: ['recA4FNbfLDDvBgw6', 'rec5lB3W340NBdJsc', 'rec7szb6QZFKAVDwr'],
    },
  },
  {
    id: 'recucFhxQWPkd4At6',
    createdTime: '2024-04-25T00:45:43.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Penelope Patterson',
    },
  },
  {
    id: 'recz7oY3ajWL6AQ25',
    createdTime: '2024-04-25T00:45:11.000Z',
    fields: {
      CheckedIn: true,
      Name: 'Liam Lancelot',
    },
  },
]
