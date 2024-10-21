import Button from './components/Button'

export default function Home() {
  return (
    <main className='flex flex-col h-full'>
      <h1 className='text-4xl font-bold text-center'>
        Welcome to the Brannon Exchange
      </h1>
      <div className='flex flex-col items-center gap-10 mt-24 w-full'>
        <div className='flex justify-center gap-10 w-full'>
          <Button
            href='/check-in-out?direction=in'
            style='blue'
            className='w-72 h-72 aspect-square'
          >
            Check In
          </Button>
          <Button
            href='/check-in-out?direction=out'
            style='brown'
            className='w-72 h-72 aspect-square'
          >
            Check Out
          </Button>
        </div>
        <Button
          href='/feedback'
          style='orange'
          className='py-12 px-6 w-[calc((72+72+10)*4px)]'
        >
          Feedback
        </Button>
      </div>
    </main>
  )
}
