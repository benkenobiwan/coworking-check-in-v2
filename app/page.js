export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl font-bold text-center'>
        Welcome to the Brannon Exchange
      </h1>
      <div className='flex flex-col items-center gap-4 mt-8 w-full'>
        <div className='flex justify-center gap-4 w-full'>
          <a
            href='/check-in-out?direction=in'
            className='bg-[hsl(163,30%,60%)] hover:bg-[hsl(163,26%,50%)] text-[#f4efe3] font-bold w-64 h-64 rounded-lg text-3xl text-center aspect-square flex items-center justify-center'
          >
            Check In
          </a>
          <a
            href='/check-in-out?direction=out'
            className='bg-[hsl(22,50%,60%)] hover:bg-[hsl(22,50%,52%)] text-[#f4efe3] font-bold w-64 h-64 rounded-lg text-3xl text-center aspect-square flex items-center justify-center'
          >
            Check Out
          </a>
        </div>
        <a
          href='/feedback'
          className='bg-[hsl(29,59%,60%)] hover:bg-[hsl(29,59%,52%)] text-[#f4efe3] font-bold py-12 px-6 rounded-lg text-3xl w-[calc((64+64+4)*4px)] text-center'
        >
          Feedback
        </a>
      </div>
    </main>
  )
}
