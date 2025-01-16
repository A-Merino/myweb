import { useState } from 'react';
import './Settings.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear'


function Settings() {

    const [display, setDisplay] = useState(false);

    // Changes between hidden and displayed state for the list
    const settingsClick = (event) => {
        const sl = document.querySelector('#settings-list ul');

        if (display) {
            sl.style.display = "none";

        } else {
            sl.style.display = "inline-block";

        }
        setDisplay(!display);
    }


    // if (!display) {

    //     return (
    //         <>
    //         <div onClick={settingsClick} id="settings-icon">
    //             <FontAwesomeIcon className="gear-icon" icon={faGear}/>
    //         </div>
    //         </>
    //     )
    // } else {

    //     return (
    //         <>
    //         <div id="settings-list">
    //             <FontAwesomeIcon  className="gear-icon" onClick={settingsClick}  icon={faGear}/>
    //             <ul>
    //                 <li>
    //                     <Link to="/changelog">Change Log</Link>
    //                 </li>
    //                 <li>Light/Dark Mode</li>
    //             </ul>
    //         </div>
    //         </>
    //     )

    // }

    return (
            <>
            <div id="settings-list">
                <FontAwesomeIcon  className="gear-icon" onClick={settingsClick}  icon={faGear}/>
                <ul id="sl">
                    <li>
                        <Link to="/changelog">Change Log</Link>
                    </li>
                    <li>Light/Dark Mode</li>
                </ul>
            </div>
            </>
        )
}

export default Settings;
