import React from 'react'
import './HomeComponent4.css'
import homcom4_1 from "../img/homCom4-1.jpg"
import homcom4_2 from "../img/homCom4-2.jpg"
import homcom4_3 from "../img/homCom4-3.jpg"
import homcom4_4 from "../img/homCom4-4.jpg"

const HomeComponent4 = () => {
  return (
    <div>
        <div  className='HomeComponent4' >
            <div  className='HomeComponent4_1' >
                <h1>UPCOMING<br/> TOURS &<br></br> DESTINATION</h1><br />
                <hr /><br /> <br />
                <span>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris.
                    Sinistra possedit litora ut nabataeaque.Setucant coepyterunt perveniunt
                    animal! Concordi aurea nabataeaque seductaque constaque cepit sublime
                    flexi nullus.
                </span>
                <br /><br />
                <button  className='com3_buuton' >LERN MORE</button>
            </div>
            <div className='HomeComponent4_2'>
                <div className='homcom4-img1' >
                    <img   className='homcom4-img11'  src={homcom4_1} alt="" />
                </div>
                <div  className='homcom4-img2' >
                     <img  className='homcom4-img11' src={homcom4_2} alt="" />  
                </div>
                <div  className='homcom4-img3'>
                     <img className='homcom4-img11' src={homcom4_3} alt="" />
                </div>
                <div    className='homcom4-img4'>
                    <img  className='homcom4-img11' src={homcom4_4} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeComponent4