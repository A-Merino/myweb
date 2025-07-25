import { useState } from 'react';
import './Settings.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear'


function Settings() {

    const [display, setDisplay] = useState(false);
    const [checked, setChecked] = useState(true);

    // Changes between hidden and displayed state for the list
    const settingsClick = (event) => {
        const sl = document.querySelector('#settings-list ul');
        const gear = document.querySelector('.gear-icon');
        if (display) {
            sl.style.display = "none";
            gear.style.rotate = '-90deg';

        } else {
            sl.style.display = "flex";
            gear.style.rotate = '90deg';

        }
        setDisplay(!display);
    }

    const changeTheme = (event) => {
        // console.log("CHanged theme")
        setChecked(!checked)
        console.log(event.target.checked)
    }

    return (
            <>
            <div id="settings-list" onMouseEnter={settingsClick} onMouseLeave={settingsClick}>
                <FontAwesomeIcon  className="gear-icon" icon={faGear}/>
                <ul id="sl">
                    <li>
                        <Link to="/changelog">Change Log</Link>
                    </li>
                    {/*<li>Light/Dark Mode
                        <label className='switch'>
                            <input className='mover' type='checkbox' checked={checked} onChange={changeTheme}/>
                            <span id="slider"></span>
                        </label>
                    </li>*/}
                </ul>
            </div>
            </>
        )
}

export default Settings;
