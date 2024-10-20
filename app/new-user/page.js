'use client'

import TitleAndBack from '../components/TitleAndBack'
import FormRow from '../components/FormRow'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Button from '../components/Button'
import { startSession, registerUser } from '../server-actions/actions'

const NewUser = () => {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const name = event.target.Name.value
    const email = event.target.Email.value
    const phone = event.target.Phone.value
    try {
      const createdUser = await registerUser({
        body: { Name: name, Email: email, Phone: phone },
      })
      toast.success('Registration successful')

      if (createdUser && createdUser.id) {
        const session = await startSession(createdUser.id)
        if (session) {
          toast.success('Check-in successful')
        } else {
          toast.error('Check-in failed')
        }
      }

      router.push('..')
    } catch (error) {
      toast.error('Registration or check-in failed')
      console.error(error)
    }
  }

  return (
    <div className='w-3/4 mx-auto'>
      <TitleAndBack title='new user' path='../code-of-conduct' />
      <form
        className='bg-[var(--accent)] rounded-lg shadow-md p-8 mt-12'
        onSubmit={handleSubmit}
      >
        <div className='space-y-6'>
          <FormRow
            type='text'
            name='Name'
            placeholder='Your name'
            labelClassName='text-xl mb-2 block'
            inputClassName='w-full p-3 text-2xl rounded-lg bg-[var(--background)] text-[var(--foreground)] border placeholder:text-[var(--foreground)]'
          />
          <FormRow
            type='tel'
            name='Phone'
            placeholder='Your phone number'
            pattern='^[\d\s\.\+\-\(\)]+$'
            labelClassName='text-xl mb-2 block'
            inputClassName='w-full p-3 text-2xl rounded-lg bg-[var(--background)] text-[var(--foreground)] border placeholder:text-[var(--foreground)]'
          />
          <FormRow
            type='email'
            name='Email'
            placeholder='Your email address'
            labelClassName='text-xl mb-2 block'
            inputClassName='w-full p-3 text-2xl rounded-lg bg-[var(--background)] text-[var(--foreground)] border placeholder:text-[var(--foreground)]'
          />
        </div>
        <Button type='submit' className='w-full mt-8 py-4' style='blue'>
          Register & check in
        </Button>
      </form>
    </div>
  )
}
export default NewUser
