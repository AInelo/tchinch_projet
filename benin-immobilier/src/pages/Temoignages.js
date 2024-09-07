import React from 'react'
import footer from '../assets/footer.png'

const Temoignages = () => {
  return (
    <div className='font-serif'>
      <div></div>
      <div className='flex flex-col justify-around h-64 w-[450px] border  rounded-lg shadow-xl ps-4'>
        <div>Témoignages</div>
        <div className='font-bold text-[2em]'>Ce que nos clients disent</div>
        <div>"Ce que nos clients disentCe que nos clients disentCe que nos clients disentCe que nos clients disentCe que nos clients disent"</div>

        <div className='flex'>
          <img className='h-[50px] w-[50px] border rounded-full' src={footer}/>
          <div className='px-4'>
            <div className='font-bold'>Dona HOUEKPOEHA</div>
            <div>Developer</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Temoignages