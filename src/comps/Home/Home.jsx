import { useState } from 'react'
import './Home.css'
import Nav from './../Nav/Nav.jsx'
import {Link} from 'react-router-dom';
import QuickLink from './../QuickLink/QuickLink.jsx'

function Home() {

    return (
        <>
            <Nav page={'Home'}/>
            <div id="home-all">
                <div id="home-main">
                    <h2>Welcome!</h2>
                    <p>Hey there! My name is Alex Merino and I'd personally like to welcome you to my website. It's kind of a mess right now but my plan is to try and update it with new features or information at least once a week, time abiding.</p>
                    <h3>About me</h3>
                    <p>I am a Senior at Florida Institute of Technology studying Computer Science (along with a Computational Mathematics Minor). I also do research with <a href="https://www.ryantwhite.com">Dr. White</a> and the <a href='https://research.fit.edu/nets/'>NEural TransmissonS</a> (NETS) lab at Florida Tech.</p>
                    <p>Other work experience you ask? I do math tutoring for middle and high schoolers at <a href="https://www.spacecoastacademics.com">Space Coast Academics LLC (SCA)</a>. Some of the subjects I tutor are Calculus, Geometry, and Algebra. I also did soccer refereeing from 2019 to 2024.</p>
                    <p></p>

                    <h3>What am I up to right now?</h3>
                    <p>Currently, I am taking 6 classes at Florida Tech, one of them being my two semester long Senior Project. The goal of the project is to build a web application which houses a centralized location to fill out certain registrar forms at Florida Tech. The link <a href="https://a-merino.github.io/FormBusterSite/">here</a> houses our documents for the project and our progress each month.</p>    
                    <p>I am also currently working on applying <a href="https://en.wikipedia.org/wiki/Information_theory">information theory</a> to convolutional neural networks to reduce redundancy in models. This is part of the explainable AI research through Dr. White's lab at Florida Tech.</p>
                    <p>Along with the above I am also working with SCA to run educational Lego classes as well as teaching a beginner Python coding class to middle schoolers once a week.</p> 

                    <h3>Interests</h3>
                    
                    <ul>
                        <li>Coding</li>
                        <li>Soccer</li>
                        <li>Formula 1 (McLaren WCC let's goooo)</li>
                        <li>Video Games</li>
                        <li>Traveling (Check out <Link to="/pics">Photography</Link>)[Except don't because there's nothing there lol]</li>
                    </ul>
                </div>
                <div id="home-side">
                    <h4>Quick Links</h4>
                    <QuickLink/>
                </div>
            </div>
        </>
    )
}

export default Home
