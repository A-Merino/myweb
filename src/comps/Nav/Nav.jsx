import { useState } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom';

function Nav(props) {
    
    if (props.page === "Home") {
        return (
        <>
            <nav>
                <ul id="navbar">
                    <li className="nav-active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/pics">Photography</Link>                    
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
        )

    } else if (props.page === "Classes") {
        return (
        <>
            <nav>
                <ul id="navbar">
                    <li className='nav-inactive'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-active">
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/pics">Photography</Link>                    
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
        )
    } else if (props.page === "Photography") {
        return (
        <>
            <nav>
                <ul id="navbar">
                    <li className='nav-inactive'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className="nav-active">
                        <Link to="/pics">Photography</Link>                    
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
        )
    } else if (props.page === "Projects") {
        return (
        <>
            <nav>
                <ul id="navbar">
                    <li className='nav-inactive'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/pics">Photography</Link>                    
                    </li>
                    <li className="nav-active">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
        )
    } else {
        return (
        <>
            <nav>
                <ul id="navbar">
                    <li className='nav-inactive'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className='nav-inactive'>
                        <Link to="/pics">Photography</Link>                    
                    </li>
                    <li className="nav-inactive">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
        )
    }


}

export default Nav
