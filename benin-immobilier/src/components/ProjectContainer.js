import React from 'react'
import styled from 'styled-components'

const ProjectLabel = styled.div`
  content: '';
  top: -10px;
  left: 0;
  right: 0;
  height: 10px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: -1;
`

const ProjectContainer = ({projectName,description,picture}) => {
  return (
    <div className='border rounded-2xl h-[450px] m-10 w-[500px] border-secondary'>
      <img src={picture} alt='Image du projet' className='relative h-1/2 w-full border rounded-2xl'/>
      <ProjectLabel className='flex flex-col shadow-top'>
        <div className='font-bold text-2xl text-center pt-3'>{projectName}</div>
        <div className='text-center text-sm p-5'>{description}</div>
        <div className='flex justify-center '>
          <button className='border border-secondary text-secondary text-bold rounded-full px-6'>Order a consultation</button>
          <button className='border border-secondary bg-secondary text-white text-bold rounded-full py-2 px-16'>See project</button>
        </div>
      </ProjectLabel>
    </div>
  )
}

export default ProjectContainer