import React from 'react'

const Contact = () => {
  return (
    <div className='w-full font-serif'>
      <div className=' text-right pr-10 font-bold text-primary text-[8em]'>Subscribe</div>
      <div className=' text-right pr-10 font-bold'>Unlock the door for the futur home by Subscribing to our premium real website </div>

      <div className='w-full flex flex-row-reverse px-60 mt-10 '>
        <input  className='border text-left rounded-full border-primary w-[380px] px-20 py-5' type='email' placeholder='Entrez votre email' />
        <button className='absolute border border-primary border-1 rounded-full bg-primary px-10 py-5 '>Subscribe</button>
      </div>
    </div>
  )
}

export default Contact