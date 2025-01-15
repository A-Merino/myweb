import { useState } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom';

function Nav(props) {
    
    return (
    <>
        <nav>
            <ul id="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/classes">Classes</Link>
                </li>
                <li>
                    <Link to="/pics">Photography</Link>                    
                </li>
                <li>
                    <Link to="/projs">Projects</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Nav
