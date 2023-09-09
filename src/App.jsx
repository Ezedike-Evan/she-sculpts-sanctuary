import './App.css'
import AboutMeDesktop from './component/aboutMeDesktop'
import AboutMeMobile from './component/aboutMeMobile'
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
    {
      (window.innerWidth >= 1000) ? <AboutMeDesktop /> : <AboutMeMobile />
    }
      <WorkOut />
    {
      (window.innerWidth <= 430) ? <h2 className='stories'>success stories</h2> : ''
    }
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