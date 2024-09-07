import React from 'react'
import projectList from '../datas/projectList'
import ProjectContainer from './ProjectContainer'
import footer from '../assets/footer.png'


const Louer = () => {
  return (
    <div className='flex'>
    {projectList.map(({projectName,description,picture,type,index})=>(type === 'rent' && <div key={`${projectName}-${index}`}>

<ProjectContainer 
  projectName={projectName}
  description={description}
  picture={picture}
/>


</div>))}



    </div>
  )
}

export default Louer