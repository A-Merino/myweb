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
            <h4>{props.data.class}</h4>
            <p>Grade: <span className={gradeClass}>{props.data.grade}</span></p>
            <p>{props.data.semester}</p>
            <p><a href={props.data.link}>Professor: {props.data.professor}</a></p>

        </div>
    </>
    );
}

export default ClassCard;
