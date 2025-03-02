import { useState, useEffect } from 'react'
import './CCHolder.css'
import ClassData from './../../../assets/data/classes.json';
import ClassCard from './ClassCard/ClassCard.jsx'

function CCHolder() {
  

    const allClasses = ClassData;


    return (
    <>
        <div id="card-holder">
            {
                allClasses.map(cla => {
                    return <ClassCard data={cla} key={cla.id}/>
                })
            }

        </div>

    </>
    )
}

export default CCHolder
