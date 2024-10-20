import TitleAndBack from '../components/TitleAndBack'
import Button from '../components/Button'

const CodeOfConduct = () => {
  return (
    <div className='w-3/4 mx-auto flex flex-col gap-8'>
      <TitleAndBack
        title='code of conduct'
        path='../check-in-out?direction=in'
      />
      <article className='bg-[var(--accent)] rounded-lg shadow-md p-6 pb-8 overflow-auto max-h-[calc(100vh-25rem)]'>
        {articleContents}
        <Button href='../new-user'>
          <h4>agree & continue</h4>
        </Button>
      </article>
    </div>
  )
}

export default CodeOfConduct

const articleContents = (
  <>
    <h5 className='text-xl font-semibold mb-2'>Welcome!</h5>
    <p className='mb-4'>
      This space is designed to foster professional growth, collaboration, and
      Christian fellowship. A welcoming and productive environment that reflects
      the values of the church and allows church members to do good work while
      strengthening their connection to the community.
    </p>

    <h5 className='text-xl font-semibold mb-2'>Living Our Mission</h5>
    <p className='mb-4'>
      Following the Peak Street's mission statement, "To know Jesus Christ and
      make him known… as a witness to the Kingdom of God," we promote a spirit
      of kindness, respect, and inclusivity. We believe that our professional
      lives should contribute to our witness for Christ.
    </p>

    <h5 className='text-xl font-semibold mb-2'>
      Respectful & Productive Environment
    </h5>
    <ul className='list-disc pl-5 mb-4'>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Noise Levels: </span>
          Avoid loud conversations and calls in the main room. Use the
          conversation rooms, mezzanine, or step outside the building instead.
          Be mindful of making noise on the mezzanine or atrium and avoid
          tap-dancing for the sake of Bangkok Thai below.
        </p>
      </li>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Christian Character: </span>
          We strive to embody kindness, respect, patience, and willingness to
          help others. Treat fellow members with the compassion and love of
          Christ.
        </p>
      </li>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Cleanliness: </span>
          Clean up after yourself, wash your dishes, dispose of trash, etc. A
          clean space reflects a thoughtful and caring community.
        </p>
      </li>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Shared Space: </span>
          Be mindful of personal belongings and avoid monopolizing desks or
          common areas. Respect the designated workspaces of others.
        </p>
      </li>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Shared Snacks: </span>
          Any free snacks we provide are clearly labeled. The rest are marked
          with a price which you can send as a donation using the posted QR
          code.
        </p>
      </li>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Shared Fridge: </span>
          Do not store food in the fridge overnight. It is for day-use only.
        </p>
      </li>
      <li className='mb-2'>
        <p>
          <span className='font-semibold'>Feedback: </span>
          If you have questions or concerns, reach out to Dillon or Ben, or
          submit feedback using the check-in app.
        </p>
      </li>
    </ul>

    <h5 className='text-xl font-semibold mb-2'>Expanding the Kingdom</h5>
    <p className='mb-4'>
      This coworking space is an opportunity to live out our faith in the
      professional sphere. As members, we can hold each other accountable, share
      needs and prayers, and collaborate for the sake of the Gospel. By
      following these principles, we can create a Christ-centered environment
      where members grow professionally and personally. Let's work together to
      make Bare Bones Coworking a faithful witness to the Kingdom of God!
    </p>
  </>
)
