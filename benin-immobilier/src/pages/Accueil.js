import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
import styled from 'styled-components'

const AccueilBox = styled.div`
position: relative;
width: 200px;
height: 140px;
overflow: hidden;
border-radius: 20px;

margin:20px;
  &::before {
    content: '';
    position: absolute;
    margin-left: 50px;
    width: 50px;
    height: 55px;
    box-shadow: 0 0 0 250px rgba(250, 250, 250, 0.3);
    border-radius: 10px;    

  }
`

const CgArrowTopRightStyles = styled(CgArrowTopRight)`
  position : absolute;
  width: 45px;
  height: 45px;
  margin-left: 152px;
  margin-top:5px;
  border-radius: 30px;
  background-color :  rgba(250, 250, 250, 0.3);
`

const Accueil = () => {
  return (
    <div className='flex h-[700px] text-center w-full mb-10 text-white font-serif'>
      <div className='bg-[url("/src/assets/img_accueil_1.jpg")] flex flex-col justify-center bg-cover bg-center w-1/2 h-full border rounded-xl'>
        <div className='font-bold'>Nom de l'entreprise</div>
        <div className='text-[4em] font-bold'>Trouvez votre <br /> <span className='underline'>maison de rêve</span><br />aujourd'hui</div>
          <div className='w-full flex ml-[220px]'>
            <input  className='border rounded-full w-[200px] px-5 py-2' type='email' placeholder='Entrez votre email' />
            <button className='border border-primary border-1 rounded-full bg-primary px-5 py-2  ml-3'>Subscribe</button>
          </div>
      </div>
      <div className='bg-[url("/src/assets/img_accueil_2.png")] bg-cover bg-center w-1/2 h-full border rounded-xl flex flex-col justify-between'>
        <AccueilBox>
          <CgArrowTopRightStyles />
        </AccueilBox>
        <div className='border border-1 rounded-full px-8 py-2 w-60 mt-60 ml-[520px]'>Marché immobilier</div>
        <div className='border border-1 rounded-full px-8 py-2 w-60'>Immobilier résidentiel</div>
        <div className='border border-1 rounded-full px-8 py-2 w-60 ml-96 '>Vente immobilière</div>
        <div className='border border-1 rounded-full px-8 py-2 w-60 ml-60 mb-3'>Location immobilière</div>

      </div>
      {/* <img className='w-1/2 h-full bg-opacity-50 border rounded-xl' src={accueil_img_1} /> */}
      {/* <img className='w-1/2 h-full border rounded-xl' src={accueil_img_2}/> */}
    </div>
  )
}

export default Accueil