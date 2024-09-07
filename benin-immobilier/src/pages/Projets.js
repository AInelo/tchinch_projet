import React from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Projets = () => {
  const navigate = useNavigate()
    useEffect(() => {
      navigate('/projets/louer', { replace: true });
    }, []);

  return (

    <div className='flex flex-col w-full font-serif'>
      <div className='text-center text-sm'>PROJETS</div>
      <div className='text-center text-[3em] font-bold'>Découvrez tous nos projets</div>
      <div className=''>
        <Link to='louer' className='p-10 hover:font-bold  hover:duration-700 focus:text-primary focus:font-bold'>Louer</Link>
        <Link to='acheter' className='p-10 hover:font-bold  hover:duration-700 focus:text-primary focus:font-bold' >Acheter</Link>
      </div>
      
      <Outlet />
      <div className=' border border-primary text-center rounded-full w-[200px] p-2 m-auto'>Voir plus</div>
    </div>
  )
}

export default Projets