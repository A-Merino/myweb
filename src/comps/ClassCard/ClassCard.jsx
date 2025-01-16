import { useState } from 'react';
import './ClassCard.css';

function ClassCard(props) {

    const [front, setFront] = useState(true);

    let gradeClass = "na-grade";

    if (props.data.grade === "A") {
        gradeClass = 'a-grade'; 
    } else if (props.data.grade === "B") {
        gradeClass = "b-grade";
    }
  
    // Flips the class card from grade to description or vice versa
    const flipCard = (event) => {
        setFront(!front)
    }


    if (front) {
        return (
        <>
            <div id={`${props.data.id}-card`} className="class-card" onClick={flipCard}>
                <h3 className="card-title">{props.data.class}</h3>
                <p className="card-grade">Grade: <span className={gradeClass}>{props.data.grade}</span></p>
                <p className="card-sem">{props.data.semester}</p>
                <p className="card-prof"><a href={props.data.link} target="_blank">Professor: {props.data.professor}</a></p>

            </div>
        </>
        );

    } else {
        return (
        <>
            <div id={`${props.data.id}-card`} className="class-card" onClick={flipCard}>
                <h3 className="card-title">{props.data.class}</h3>
                <p className="card-desc">{props.data.description}</p>

            </div>
        </>
        );
    }

}

export default ClassCard;

