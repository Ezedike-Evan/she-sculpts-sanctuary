/* eslint-disable react/no-unescaped-entities */
import '../css/contactMe.css'
import {LiaFacebookF, LiaTwitter, LiaInstagram, LiaLinkedinIn} from 'react-icons/lia'
const ContactMe = ()=>{
    return(
        <section id="third-section">
            <div id='st-part'>
                <h2>michaelo l'enchengo</h2>
                <h4>fitness coach</h4>
                <p>
                    50 prince francine street <br />
                    chicago, CA 94158
                </p>
                <p>Tel : 123-456-7890</p>
                <p>mr.morningsta6@gmail.com</p>
                <div className='socials'>
                    <a href=""><LiaFacebookF /></a>
                    <a href=""><LiaTwitter /></a>
                    <a href=""><LiaInstagram /></a>
                    <a href=""><LiaLinkedinIn /></a>
                </div>
            </div>
            <div id="sent-email">
                <h2>GET IN TOUCH</h2>
                <div>
                    <label htmlFor="firstname">First Name *</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name *</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="address">Email *</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="email">Phone</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea placeholder='Message'></textarea>
                </div>
                <button>Sumbit</button>
            </div>
        </section>
    )
}

export default ContactMe