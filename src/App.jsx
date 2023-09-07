import './App.css'
import AboutMe from './component/aboutMe'
import ContactMe from './component/contactMe'
import Footer from './component/footer'
import Intro from './component/intro'
import NavBarDesktop from './component/navBarDesktop'
import NavBarMobile from './component/navBarMobile'
import Quote from './component/quote'
import SuccessStories from './component/successStories'
import WorkOut from './component/workout'

const App = ()=>{
  return (
    <>
    {
      (window.innerWidth >= 1000) ? <NavBarDesktop /> : <NavBarMobile />
    }
      <Intro />
      <Quote />
      <AboutMe />
      <WorkOut />
      <div id='end'></div>
      <div id='stories-container'>
        <SuccessStories />
      </div>
      <ContactMe />
      <Footer />
    </>
  )
}

export default App