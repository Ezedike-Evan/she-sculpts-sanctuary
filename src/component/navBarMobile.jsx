import '../css/navBar.css'
import {LiaFacebookF, LiaTwitter, LiaInstagram, LiaLinkedinIn} from 'react-icons/lia'

const NavBarMobile = ()=>{
    return(
        <nav>
            <h1> M L </h1>
            <ul>
                <li><a href=""><LiaFacebookF /></a></li>
                <li><a href=""><LiaTwitter /></a></li>
                <li><a href=""><LiaInstagram /></a></li>
                <li><a href=""><LiaLinkedinIn /></a></li>
            </ul>
        </nav>
    )
}

export default NavBarMobile