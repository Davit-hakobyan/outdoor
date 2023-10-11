import React from 'react'
import HomeComponent1 from '../../Component/HomeComponent1/HomeComponent1'
import './Home.css'
import HomeComponent2 from '../../Component/HomeComponent2/HomeComponent2'
import HomeComponent3 from '../../Component/HomeComponent3/HomeComponent3'
import HomeComponent4 from '../../HomeComponent4/HomeComponent4'
import Heder from '../../Component/Heder/Heder'


const Home = () => {
  return (
    <div className='Home' >
       <Heder/>
      <HomeComponent1/>
      <HomeComponent2/>
      <HomeComponent3/>
      <HomeComponent4/>
    </div>
  )
}

export default Home