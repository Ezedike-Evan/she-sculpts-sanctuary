import '../css/navBar.css'
import {LiaFacebookF, LiaTwitter, LiaInstagram, LiaLinkedinIn} from 'react-icons/lia'

const NavBarMobile = ()=>{
    return(
        <nav>
            <h1> M L </h1>
            <ul>
                <li><a href=""><LiaFacebookF size={30}/></a></li>
                <li><a href=""><LiaTwitter size={30}/></a></li>
                <li><a href=""><LiaInstagram size={30}/></a></li>
                <li><a href=""><LiaLinkedinIn size={30}/></a></li>
            </ul>
        </nav>
    )
}

export default NavBarMobile