import { useState } from 'react'
import './Classes.css'
import CCHolder from './../CCHolder/CCHolder.jsx';
import Nav from './../Nav/Nav.jsx'

function Classes() {

    return (
        <>
            <Nav page={'Classes'}/>
            <div id="class-header">
                <h1>Courses</h1>
                <p>Below is the list of all the college courses I have taken in my undergraduate studies at Florida Tech, along with the letter grade I acheieved in the course.</p>
                <p>To learn more about the course you can click on the card and the <a href="https://www.fit.edu/catalog/">Floirda Tech Catalog</a> description of the course will appear. For more information about the professor, you can click on their name and it will take you to their personal website (in some cases to their LinkedIn, staff profile, Google Scholar, etc.)</p>
            </div>
            <CCHolder/>
        </>
    )
}

export default Classes
