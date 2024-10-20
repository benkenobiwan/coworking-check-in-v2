import TitleAndBack from '../components/TitleAndBack'
import UserList from './UserList'
import Button from '../components/Button'
import { getAllUsers } from './actions'

const CheckInOut = async ({ searchParams }) => {
  const direction = searchParams.direction

  const allUsers = await getAllUsers(direction)

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
