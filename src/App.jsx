import './App.css'
import AboutMe from './component/aboutMe'
import Intro from './component/intro'
import NavBar from './component/navBar'
import Quote from './component/quote'
import WorkOut from './component/workout'

const App = ()=>{
  return (
    <>
      <NavBar />
      <Intro />
      <Quote />
      <AboutMe />
      <WorkOut />
    </>
  )
}

export default App