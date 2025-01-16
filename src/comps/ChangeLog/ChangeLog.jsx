import { useState } from 'react'
import './ChangeLog.css'
import Nav from './../Nav/Nav.jsx'
import Logs from './../../assets/data/logs.json';
import Log from './../Log/Log.jsx'


function ChangeLog() {

    const allLogs = Logs;

    return (
        <>
            <Nav pages='g'/>
            <div id="log-holder">
                <h1>Change Log</h1>
                {
                    allLogs.map(log => {
                        return <Log data={log} key={log.id}/>

                    })
                }
            </div>
        </>
    )
}

export default ChangeLog
