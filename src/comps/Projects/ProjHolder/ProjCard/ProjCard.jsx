import { useState } from 'react'
import './ProjCard.css'
import {Link, useNavigate} from 'react-router'



function ProjCard(props) {
    let nav = useNavigate();

    const goToProj = () => {
        nav(props.data.link);
    }    

    return (
        <>
        <div onClick={goToProj} className="project-card">
            <img src={props.data.image}/>
            <div className='pc-words'>
                <h4>{props.data.title}</h4>
                <p><strong>Class:</strong> {props.data.class}</p>     
                <p><strong>Date:</strong> {props.data.when}</p>     
                <p>{props.data.description}</p>
            </div>
        </div>
        </>
    )
}

export default ProjCard
