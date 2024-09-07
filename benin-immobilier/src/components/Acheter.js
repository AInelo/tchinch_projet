import React from 'react'
import projectList from '../datas/projectList'
import ProjectContainer from './ProjectContainer'


const Acheter = () => {
  return (
    <div className='flex'>
    {projectList.map(({projectName,description,picture,type,index})=>(type === 'bought' && <div key={`${projectName}-${index}`}>

<ProjectContainer 
  projectName={projectName}
  description={description}
  picture={picture}
/>
</div>))}
    </div>
  )
}


export default Acheter