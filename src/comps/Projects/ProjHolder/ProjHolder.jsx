import { useState } from 'react'
import './ProjHolder.css'
import ProjCard from './ProjCard/ProjCard.jsx';
import ProjectData from './../../../assets/data/projects.json';


function ProjHolder() {

    return (
        <>
            <div id="proj-blurb">
            <h1>Projects</h1>
            <p>Below is an ever growing list of projects that I have worked on. You can click on each one to see more about the project such as reports, coding, images, and results.</p>
            <p>The projects at the top are my favorite projects, or ones that I believe I put the most effort into (which, in most cases, are the projects that I enjoyed in the first place).</p>
            </div>
            <div id="proj-holder">
                {
                    ProjectData.map(proj => {
                        return <ProjCard data={proj} key={proj.id}/>
                    })
                }    
            </div>
        </>
    )
}

export default ProjHolder;
