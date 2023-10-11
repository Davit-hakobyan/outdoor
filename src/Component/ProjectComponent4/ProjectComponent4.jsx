import React from 'react'
import ProjectComponentslide from '../ProjectComponentslid/ProjectComponentslide'
import projcom4_1 from '../../img/projcomp4_1.jpg'
import projcom4_2 from '../../img/projcomp4_2.jpg'
import projcom4_3 from '../../img/projcomp4_3.jpg'
import projcom4_4 from '../../img/projcomp4_4.jpg'
const proektimg = [projcom4_1,projcom4_2,projcom4_3,projcom4_4]

const ProjectComponent4 = () => {
  return (
    <div>
        <div className='ProjectComponent' >
          <div className='ProjectComponent_div1'  >
            <div>
              <h3>Forest Tours</h3>
               <div></div>
            </div>
            <br /><br />
            <h1>CAMPING</h1>
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

export default ProjectComponent4