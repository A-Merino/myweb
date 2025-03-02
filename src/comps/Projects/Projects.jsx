import { useState } from 'react'
import './Projects.css'
import Nav from './../Nav/Nav.jsx';
import ProjHolder from './ProjHolder/ProjHolder.jsx';
import { Outlet } from "react-router";

function Projects() {

    return (
        <>
        <Nav page={'Projects'}/>
        <Outlet />
        </>
    )
}

export default Projects
