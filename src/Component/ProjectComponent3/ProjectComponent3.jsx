import React from 'react'
import './ProjectComponent3.css'
import ProjectComponentslide from '../ProjectComponentslid/ProjectComponentslide'
import projcom3_1 from '../../img/projcomp3_1.jpg'
import projcom3_2 from '../../img/projcomp3_2.jpg'
import projcom3_3 from '../../img/projcomp3_3.jpg'
import projcom3_4 from '../../img/projcomp3_4.jpg'
const proektimg = [projcom3_1,projcom3_2,projcom3_3,projcom3_4]

const ProjectComponent3 = () => {
  return (
    <div>
         <div className='ProjectComponent' >
        <div className='ProjectComponent_div1'  >
          <div>
            <h3>Snow Adventure</h3>
            <div></div>
          </div>
          <br /><br />
          <h1>WINTER SPORTS</h1>
          <br />
          <span>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</span>
        </div>
        <div  className='prjslid1' >
          <ProjectComponentslide   imgproekt={proektimg} />
          
        </div>
        
   </div>
    </div>
  )
}

export default ProjectComponent3