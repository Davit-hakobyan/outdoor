import React, { useState } from 'react'
import './Heder.css'
import { Link } from 'react-router-dom'

const Heder = () => {
  const [menuicon, setMenuicon] = useState(true)
  function Clicklisner(){
    setMenuicon(!menuicon)

  }
  return (
    <div  >
       <div className='heder'>
       <div  className='heder_logo' >
            <h1>OUTDOOR</h1>
            <h2  style={{fontWeight:'500'}} >ADVENTURE</h2>
        </div>
        <div  className='heder_menu' >
            <Link  style={{textDecoration:'none'}} to={'/'} >
              <b id='butHome' >Home</b>
            </Link>
             <Link  style={{textDecoration:'none'}} to={'/About'} >
                <b id='butAbout' >About</b>
            </Link>
            <Link   style={{textDecoration:'none'}} to={'/Servises'} >
                    <b  id='butAbout' >Services</b>
            </Link>
            <Link   style={{textDecoration:'none'}} to={'/Projects'} >
                    <b  id='butAbout' >Projects</b>
            </Link>
            
            <Link   style={{textDecoration:'none'}} to={'/Contact'} >
                    <b  id='butAbout' >Contact</b>
            </Link>
            <button>TAKE ACTION</button>
         
        </div>
        <div className='menuMedia'  onClick={Clicklisner}  >
          {menuicon?
            ( <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg></div>):(
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg></div>
              
             
            )
         }   
        </div>
       </div>
       <div>
        {menuicon?
          (''):(<div  className='hedermenuMedia'  >
            <Link  className='menuLink'  style={{textDecoration:'none'}} to={'/'} >
              <p id='butHome menup' className='menup' >Home</p>
            </Link>
            <hr />
             <Link  className='menuLink'  style={{textDecoration:'none'}} to={'/About'} >
                <p id='butAbout menup'  className='menup' >About</p>
            </Link>
            <hr />
            <Link  className='menuLink'  style={{textDecoration:'none'}} to={'/Servises'} >
                    <p  id='butAbout menup' >Services</p>
            </Link>
            <hr />
            <Link className='menuLink'   style={{textDecoration:'none'}} to={'/Projects'} >
                    <p  id='butAbout  menup' >Projects</p>
            </Link>
            <hr />
            
            <Link className='menuLink'   style={{textDecoration:'none'}} to={'/Contact'} >
                    <p  id='butAbout menup' >Contact</p>
            </Link>
            <hr />
            
          </div>
          )
        }
        </div>
    </div>
  )
}

export default Heder