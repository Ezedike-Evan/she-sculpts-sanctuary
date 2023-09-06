import './App.css'
import AboutMe from './component/aboutMe'
import ContactMe from './component/contactMe'
import Intro from './component/intro'
import NavBar from './component/navBar'
import Quote from './component/quote'
import SuccessStories from './component/successStories'
import WorkOut from './component/workout'

const App = ()=>{
  return (
    <>
      <NavBar />
      <Intro />
      <Quote />
      <AboutMe />
      <div id='end'></div>
      <WorkOut />
      <div id='stories-container'>
        <SuccessStories />
      </div>
      <ContactMe />
    </>
  )
}

export default App