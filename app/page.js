import Button from './components/Button'

export default function Home() {
  return (
    <main className='flex flex-col h-full'>
      <h1 className='text-4xl font-bold text-center'>
        Welcome to the Brannon Exchange
      </h1>
      <div className='flex flex-col items-center gap-4 mt-8 w-full'>
        <div className='flex justify-center gap-4 w-full'>
          <Button
            href='/check-in-out?direction=in'
            style='blue'
            className='w-64 h-64 aspect-square'
          >
            Check In
          </Button>
          <Button
            href='/check-in-out?direction=out'
            style='brown'
            className='w-64 h-64 aspect-square'
          >
            Check Out
          </Button>
        </div>
        <Button
          href='/feedback'
          style='orange'
          className='py-12 px-6 w-[calc((64+64+4)*4px)]'
        >
          Feedback
        </Button>
      </div>
    </main>
  )
}
