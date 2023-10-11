import './App.css';
import { useEffect,useState } from 'react';
import Footer from './Component/Footer/Footer';
import Home from './Pages/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/AboutPage/About';
import Servises from './Pages/servises/Servises';
import Contact from './Pages/Contact/Contact';
import Project from './Pages/Project/Project';





function App() {
  const [scroll, setScroll] = useState(false);
  const [bagr,setBegr] = useState({height:'420vh'})
  function f(event){
    if(event.target.id==="butAbout menup"){
      setBegr({height:'100vh'})
      console.log(bagr)
  }
    if(event.target.id==="butAbout"){
        setBegr({height:'100vh'})
        console.log(bagr)
    }
    if(event.target.id==="butHome"){
      setBegr({height:'420vh'})
      console.log(bagr)
  }
  }

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  

 useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className={scroll < 700 ? "App" : "App1"}  style={bagr}   onClick={f} >
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route  path='/About' element={<About/>} />
        </Routes>
        <Routes>
          <Route  path='/Servises' element={<Servises/>} />
        </Routes>
        <Routes>
            <Route  path='/Projects' element={<Project/>} />
        </Routes>
        <Routes>
          <Route  path='/Contact' element={<Contact/>} />
        </Routes>
   
       
        <Footer/>
       
      </Router>
    </div>
  );
}

export default App;
