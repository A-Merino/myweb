import { useState, useEffect } from 'react'
import './CCHolder.css'
import Nav from './../Nav/Nav.jsx'
import ClassData from './../../assets/data/classes.json';
import ClassCard from './../ClassCard/ClassCard.jsx'

function CCHolder() {
  

    const allClasses = ClassData
    console.log(allClasses)


    return (
    <>
        <Nav page={'Classes'}/>
        <div id="card-holder">
            {
                allClasses.map(cla => {
                    return <ClassCard data={cla}/>
                })
            }

        </div>

    </>
    )
}

export default CCHolder
