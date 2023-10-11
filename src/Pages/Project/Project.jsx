import React from 'react'
import Heder from '../../Component/Heder/Heder'
import ProjectComponentslide from '../../Component/ProjectComponentslid/ProjectComponentslide'
import ProjectComponet1 from '../../Component/ProjectComponent1/ProjectComponet1'
import ProjectComponent2 from '../../Component/ProjectComponent2/ProjectComponent2'
import ProjectComponent3 from '../../Component/ProjectComponent3/ProjectComponent3'
import ProjectComponent4 from '../../Component/ProjectComponent4/ProjectComponent4'

const Project = () => {
  return (
    <div>
        <div >
           <ProjectComponet1 />
           <ProjectComponent2/>
           <ProjectComponent3/>
           <ProjectComponent4/>
        </div>
    </div>
  )
}

export default Project