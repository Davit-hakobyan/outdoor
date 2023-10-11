import React, { cloneElement } from 'react'
import { useState, useEffect, Children } from 'react'

import './ProjectComponentslid.css'



const ProjectComponentslide = (props) => {
  const papkankar = props.imgproekt
    const [page_width,setPage_Width] =useState(1200)
   
    const[ofset,setOfset] = useState(-(page_width))
    const[transitionDuration,setTransitionDuration] =useState(300)
    useEffect(()=>{
        if(document.documentElement.scrollWidth>120){
            setPage_Width(1200)
         }
        if(document.documentElement.scrollWidth>850  &&   document.documentElement.scrollWidth<1250   ){
            setPage_Width(800)
        }
        if(document.documentElement.scrollWidth>650 && document.documentElement.scrollWidth<850){
            setPage_Width(600)
         }
         if( document.documentElement.scrollWidth>470 &&  document.documentElement.scrollWidth<650 ){
            setPage_Width(400)
        }
        if( document.documentElement.scrollWidth<470 ){
            setPage_Width(300)
        }
    

    }, [document.documentElement.scrollWidth])
    useEffect(()=>{
        if(transitionDuration===0){
            setTimeout(()=>{
                setTransitionDuration(300)
            },600)
            return
        }
    },[transitionDuration])
    useEffect(()=>{
        if(ofset==0){
            setTransitionDuration(0)
            setTimeout(()=>{setOfset(-(3*(page_width)))},300)
        }
        if(ofset==-(4*(page_width))){
            setTransitionDuration(0)
            setTimeout(()=>{setOfset(-(page_width))},300)
        }
    },[clikleft,clikright])
    
    
    function clikleft(){
       
        setOfset(valu=>{
          
            const newofset = valu + page_width
         
            return Math.min(newofset,0)
        })
    }
    function clikright(){
        setOfset((valu)=>{
            
            const newofset = valu-page_width
           
            return Math.max(newofset,-(4*(page_width)))
           
        })
    }
    
   
  return (
    <div className='slide' >
            <svg   id='button_slide'  onClick={clikleft} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        <div  className='main_container' style={{
            width:`${page_width}px`
        }}>
        
            <div className=' window' >
                <div className='items' style={{
                    transitionDuration:`${transitionDuration}ms`,
                    transform: `translateX(${ofset}px)`,
                }} 
                >
                     <div className='item item_3' >
                        <div>
                           <img src={papkankar[2]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                        <img src={papkankar[3]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                          <img src={papkankar[0]} style={{width:'100%',height:'100%'}}/>
                        </div>
                     </div>
                     <div className='item item_1' >
                        <div>
                            <img src={papkankar[0]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                           <img src={papkankar[1]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                            <img src={papkankar[2]} style={{width:'100%',height:'100%'}}/>
                        </div>
                     </div>
                     <div className='item item_2' >
                        <div>
                         <img src={papkankar[3]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                           <img src={papkankar[0]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                           <img src={papkankar[1]} style={{width:'100%',height:'100%'}}/>
                        </div>
                     </div>
                     <div className='item item_3' >
                        <div>
                           <img src={papkankar[2]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                        <img src={papkankar[3]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                          <img src={papkankar[0]} style={{width:'100%',height:'100%'}}/>
                        </div>
                     </div>
                     <div className='item item_1' >
                        <div>
                            <img src={papkankar[0]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                           <img src={papkankar[1]} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div>
                            <img src={papkankar[2]} style={{width:'100%',height:'100%'}}/>
                        </div>
                     </div>
                </div>
            </div>
            
        
        </div>
        <svg  id='button_slide'  onClick={clikright} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
    </div>
  )
}

export default ProjectComponentslide