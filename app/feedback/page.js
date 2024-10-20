'use client'

import TitleAndBack from '../components/TitleAndBack'

export default function Feedback() {
  return (
    <div className='flex flex-col h-full w-3/4'>
      <div className='w-full max-w-4xl h-full flex flex-col'>
        <TitleAndBack title='Back to Menu' path='/' />
        <div className='w-full h-full mt-4 rounded-xl overflow-hidden shadow-md'>
          <iframe
            src='https://airtable.com/embed/apps8cPVlbocvI5jQ/pag1f4hchWOzlImqj/form'
            frameBorder='0'
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  )
}
