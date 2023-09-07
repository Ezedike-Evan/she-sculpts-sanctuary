/* eslint-disable react/no-unescaped-entities */
import '../css/intro.css'
const Intro =()=>{
    return(
        <section className='intro-container'>
            <div className='intro-inner-container'>
                <h2>
                    let's get <br/>
                    moving
                </h2>
                {/* <sub>for fitness is an art</sub> */}
                <p>michelle l'enchengo - online fitness coach</p>
                <div className='intro-btn'>
                    <button>Get started</button>
                    <a href="#workout"><button>book now</button></a> 
                </div>
            </div>
        </section>
    )
}

export default Intro