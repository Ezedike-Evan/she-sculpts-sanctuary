import '../css/workout.css'

const WorkOut = ()=>{
    return(
        <section id='workout' className='workout-container'>
            <div className='workout-inner-container'>                
                <h3>
                    CHOOSE YOUR<br />
                    ONLINE WORKOUT
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae quaerat, suscipit ut quia quo optio perferendis asperiores ipsam modi odit, 
                    quibusdam quas cumque ipsum porro nostrum? Harum explicabo labore temporibus?
                </p>
                <div className='workout-cards'>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                    <div className="workout-card">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                </div>
                <button>BOOK NOW</button>
            </div>
        </section>
    )
}

export default WorkOut