import '../css/aboutme.css'

const AboutMeDesktop = ()=>{
    return(
        <div className='about-me-container'>
            <img src='/me.jpg' alt='image of me' />
            <div>
                <h3>About me</h3>
                <h6>Welcome to she sculpts sanctuary</h6>
                <p>
                    {`Your Partner for Fitness Success
                    Greetings! I'm here to guide you through your fitness adventure. With a fervor for wellness, 
                    I'm committed to helping you reach your goals.
                    My own fitness journey began with a spark.Now, 
                    I'm dedicated to helping you ignite that same fire within yourself.`}
                </p>
                <span>What I Offer</span>
                <p>
                    {`I specialize in creating tailored fitness plans that suit your lifestyle and goals. 
                    Whether you're looking to build strength, lose weight, or boost your energy, 
                    together we'll craft a plan that works for you.`}
                </p>
                <span>Why Choose Me?</span>
                <p>
                    {` I bring expertise to every session. But beyond that, I'm your biggest supporter, 
                    here to celebrate milestones and conquer challenges together `}
                </p>
                <span>Get in Touch</span>
                <p>
                    {`Let's connect and discuss your goals. 
                    I'm excited to be a part of your journey towards a healthier, happier you.
                    To your health, Michelle L'enchengo`}
                </p>
            </div>
        </div>
    )
}

export default AboutMeDesktop