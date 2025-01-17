import { useState } from 'react'
import './Home.css'
import Nav from './../Nav/Nav.jsx'
import {Link} from 'react-router-dom';


function Home() {

    return (
        <>
            <Nav page={'Home'}/>
            <div id="home-all">
                <div id="home-main">
                    <h2>Welcome!</h2>
                    <p>Hey there! My name is Alex Merino and I'd personally like to welcome you to my website.</p>
                    <p id="warning">It is still under heavy construction, but it is finally active and available to the world!</p>
                    <h3>About me</h3>
                    <p>I am a Senior at Florida Institute of Technology studying Computer Science (along with a Computational Mathematics Minor). I also do research with Dr. White and the <a href='https://research.fit.edu/nets/'>NEural TransmissonS</a> (NETS) lab at Florida Tech.</p>
                    <p>Other work experience you ask? I do math tutoring for middle and high schoolers at <a href="https://www.spacecoastacademics.com">Space Coast Academics LLC</a>. Some of the subjects I tutor are Calculus, Geometry, and Algebra. I also did soccer refereeing from 2019 to 2024.</p>
                    <p></p>
                    <h3>Interests</h3>
                    
                    <ul>
                        <li>Coding</li>
                        <li>Soccer</li>
                        <li>Formula 1 (McLaren WCC let's goooo)</li>
                        <li>Video Games</li>
                        <li>Traveling (Check out <Link to="/pics">Photography</Link>)</li>
                    </ul>
                </div>
                <div id="home-side">
                    <h4>Quick Links</h4>
                    <ul>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home
