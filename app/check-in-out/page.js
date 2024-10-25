'use client'

import TitleAndBack from '../components/TitleAndBack'
import Button from '../components/Button'
import { getAllUsers } from '../server-actions/actions'
import { useEffect, useState } from 'react'
import FormRow from '../components/FormRow'
import { startSession, endSession } from '../server-actions/actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PlaceholderButton = () => (
  <div className='m-0 mx-auto w-full bg-[var(--background)] opacity-70 shadow-md rounded-lg border-none text-xl min-h-[60px] animate-pulse'></div>
)

const CheckInOut = ({ searchParams }) => {
  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const direction = searchParams.direction

  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true)
      const allUsers = await getAllUsers(direction)
      setAllUsers(allUsers)
      setIsLoading(false)
    }
    fetchAllUsers()
  }, [direction])

  const clickClear = () => {
    setSearch('')
  }

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const clickPerson = async (person) => {
    try {
      if (direction === 'in') {
        await startSession(person.id)
        toast.success('Check-in successful')
      } else {
        await endSession(person.id)
        toast.success('Check-out successful')
      }
      router.push('/')
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.error(error)
    }
  }

  return (
    <div className='w-3/4 mx-auto flex flex-col gap-8'>
      <TitleAndBack title={`check ${direction}`} />
      {direction === 'in' && (
        <Button href='../code-of-conduct' className='font-normal !text-2xl p-2'>
          <h4>First time? Register here</h4>
        </Button>
      )}
      <form
        className='m-0 mb-4 h-full p-6 pb-8 grid grid-rows-[auto_auto_1fr] text-center overflow-hidden bg-[var(--accent)] rounded-lg shadow-md'
        onSubmit={(e) => e.preventDefault()}
      >
        <h4 className='text-2xl'>Select your name to check {direction}</h4>
        <div className='mt-4 flex items-end gap-6 w-full justify-stretch'>
          <FormRow
            type='search'
            name='search'
            value={search}
            notRequired
            placeholder='Search for your name'
            onChange={changeSearch}
            onKeyDown={handleKeyDown}
            hideLabel
            className='w-full mb-0 text-xl'
            inputClassName='h-10 text-xl text-foreground bg-[var(--background)] hover:bg-[var(--background)]/80 p-4 rounded-lg w-full placeholder:text-[var(--foreground)] hover:shadow-md transition-shadow'
          />
          <Button
            onClick={clickClear}
            className='h-10 flex items-center btn form-btn delete-btn text-xl'
            style='brown'
          >
            Clear
          </Button>
        </div>
        <div
          className={`mt-6 overflow-auto flex flex-col gap-4 min-h-[20rem] ${
            direction === 'in'
              ? 'h-[calc(100vh-40rem)]'
              : 'h-[calc(100vh-35rem)]'
          }`}
        >
          {isLoading
            ? Array(7)
                .fill(0)
                .map((_, index) => <PlaceholderButton key={index} />)
            : allUsers
                ?.filter((user) =>
                  user.fields.Name.toLowerCase().includes(search.toLowerCase())
                )
                ?.map((person) => {
                  return (
                    <button
                      type='button'
                      className='m-0 mx-auto w-full py-4 px-8 bg-[var(--background)] shadow-md rounded-lg border-none hover:shadow-lg transition-shadow'
                      key={person.id}
                      onClick={() => clickPerson(person)}
                    >
                      <h4 className='text-xl'>{person.fields.Name}</h4>
                    </button>
                  )
                })}
        </div>
      </form>
    </div>
  )
}

export default CheckInOut
