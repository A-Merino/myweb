import { useState } from 'react'
import './ProjCard.css'
import {Link} from 'react-router'

function ProjCard(props) {

            // <img src=""/>
    return (
        <>
        <div className="project-card">
        <iframe src="https://alexmerino.net" scrolling='no'></iframe>
            <h4>I am a Project</h4>
            <Link to="/projects/web-app-proj-1">Link</Link>    
            <p>Thing</p>
        </div>
        </>
    )
}

export default ProjCard
