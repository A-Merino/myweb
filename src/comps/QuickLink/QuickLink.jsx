import { useState } from 'react'
import './QuickLink.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'



function QuickLink() {

    return (
        <>
            <div id="quick-link">
                <ul>
                    <li>
                        <a id="github" href="https://github.com/A-Merino">
                        <FontAwesomeIcon icon={faGithub}/>
                        GitHub</a></li>
                    <li>
                        <a id="linkedin" href="https://www.linkedin.com/in/alex-e-merino/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        LinkedIn</a></li>
                    <li>
                        {/*<FontAwesomeIcon icon={}/>*/}
                        <a id="leetcode" href="https://leetcode.com/u/MerinoML/">LeetCode</a></li>
                </ul>
            </div>
        </>
    )
}

export default QuickLink
