import React from 'react'
import './ProjectComponent2.css'
import ProjectComponentslide from '../ProjectComponentslid/ProjectComponentslide'
import projcom2_1 from '../../img/projcomp2_1.jpg'
import projcom2_2 from '../../img/projcomp2_2.jpg'
import projcom2_3 from '../../img/projcomp2_3.jpg'
import projcom2_4 from '../../img/projcomp2_4.jpg'
const proektimg = [projcom2_1,projcom2_2,projcom2_3,projcom2_4]


const ProjectComponent2 = () => {
  return (
    <div>
      <div className='ProjectComponent' >
        <div className='ProjectComponent_div1'  >
          <div>
            <h3>Adventure</h3>
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

export default ProjectComponent2