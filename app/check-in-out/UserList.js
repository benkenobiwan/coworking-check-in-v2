'use client'

import { useState } from 'react'
import FormRow from '../components/FormRow'
import Button from '../components/Button'
import { startSession, endSession } from './actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const UserList = ({ allUsers, direction }) => {
  const [filteredUsers, setFilteredUsers] = useState(allUsers)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const updateSearch = (e) => {
    if (e?.preventDefault) e.preventDefault()
    const searchValue = e.currentTarget.value
    setSearch(searchValue)
    setFilteredUsers(
      allUsers?.filter((user) =>
        user.fields.Name.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }
  const handleClick = async (person) => {
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
    <form className='m-0 mb-4 h-full p-6 pb-8 grid grid-rows-[auto_auto_1fr] text-center overflow-hidden bg-[var(--accent)] rounded-lg shadow-md'>
      <h4 className='text-2xl'>Select your name to check {direction}</h4>
      <div className='mt-4 flex items-end gap-6 w-full justify-stretch'>
        <FormRow
          type='search'
          name='search'
          defaultValue={search}
          placeholder='Search for your name'
          onChange={updateSearch}
          hideLabel
          className='w-full mb-0 text-xl'
          inputClassName='h-10 text-xl text-foreground bg-[var(--background)] hover:bg-[var(--background)]/80 p-4 rounded-lg w-full placeholder:text-[var(--foreground)] hover:shadow-md transition-shadow'
        />
        <Button
          onClick={() => updateSearch({ currentTarget: { value: '' } })}
          className='h-10 flex items-center btn form-btn delete-btn text-xl'
          style='brown'
        >
          Clear
        </Button>
      </div>
      <div className='mt-6 overflow-auto flex flex-col gap-4 min-h-[20rem] h-[calc(100vh-40rem)]'>
        {filteredUsers?.map((person) => {
          return (
            <button
              type='button'
              className='m-0 mx-auto w-full py-4 px-8 bg-[var(--background)] shadow-md rounded-lg border-none text-xl hover:shadow-lg transition-shadow'
              key={person.id}
              onClick={() => handleClick(person)}
            >
              <h4>{person.fields.Name}</h4>
            </button>
          )
        })}
      </div>
    </form>
  )
}
export default UserList
