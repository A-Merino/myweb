import { useState } from 'react'
import './Log.css'

function Log(props) {

    let count = -1;
    return (
        <>
            <div className="log">
                <h2 className="log-header">{props.data.id}</h2>
                <p className="log-type">{props.data.type} update, {props.data.date}</p>
                <ul>
                {
                    props.data.items.map(desc => {
                        count += 1;
                        return (
                            <li key={`item-${count}`}>{desc}</li>
                        );
                    })
                }
                </ul>
            </div> 
        </>
    )
}

export default Log;
