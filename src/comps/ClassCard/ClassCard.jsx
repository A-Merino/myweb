import { useState } from 'react';
import './ClassCard.css';

function ClassCard(props) {

    let gradeClass = "na-grade";

    if (props.data.grade === "A") {
        gradeClass = 'a-grade'; 
    } else if (props.data.grade === "B") {
        gradeClass = "b-grade";
    }
  

    return (
    <>
        <div className="class-card">
            <h3 className="card-title">{props.data.class}</h3>
            <p className="card-grade">Grade: <span className={gradeClass}>{props.data.grade}</span></p>
            <p className="card-sem">{props.data.semester}</p>
            <p className="card-prof"><a href={props.data.link}>Professor: {props.data.professor}</a></p>

        </div>
    </>
    );
}

export default ClassCard;
