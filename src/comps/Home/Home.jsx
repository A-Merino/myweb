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
                    <p>Other work experience you ask? I do math tutoring for middle and high schoolers at <a href="https://www.spacecoastacademics.com">Space Coast Academics LLC</a> (SCA). Some of the subjects I tutor are Calculus, Geometry, and Algebra. I also did soccer refereeing from 2019 to 2024.</p>
                    <p></p>

                    <h3>What am I up to right now?</h3>
                    <p>Currently, I am on my last summer break ever :(. I am planning to continuously update this website over the summer and add more projects to my projects page. Make this page much nicer, add some stuff to the photography page. That's what I love about websites, there are infinite possibilities and there are so many ways to do it. Speaking of websites, my Senior Desgin Project is about halfway done. The goal of the project is to build a web application which houses a centralized location to fill out certain registrar forms at Florida Tech. The link <a href="https://a-merino.github.io/FormBusterSite/">here</a> houses our documents for the project and our progress each month.</p>    
                    <p>Another extremely fun project I am working on is a statistic tracker for the game Marvel Rivals. Using an API, I will be able to pull, store, and display data on this website! Using the data maybe I'll be able to do some machine learning tasks to try and decipher how the MVP/SVP awards are given out.</p>
                    <p>My <a href="https://en.wikipedia.org/wiki/Information_theory">information theory</a> research has come to a close for the semester, but there is plenty more work that needs to be done in the Fall to reduce redundancy in convolutional neural network models. This is part of the explainable AI research through Dr. White's lab at Florida Tech.</p>
                    <p>As for SCA, I finished the Lego and Python classes, since I am not around for the summer, but I plan to continue working there in the Fall once school starts up again.</p> 

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
