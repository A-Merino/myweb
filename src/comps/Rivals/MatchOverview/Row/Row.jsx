import { useState } from 'react'
import './Row.css'

function Row(props) {

    let us = false;
    let who = '';

    if (props.uid === "2136421725") {
        us = true;
        who = 'ryan';
    }
    else if (props.uid === "283485673") {
        us = true;
        who = 'alex';
    }
    else if (props.uid === "703166609") {
        us = true;
        who = 'sean';
    }
    else if (props.uid === "1258827257") {
        us = true;
        who = 'jj';
    }
    else if (props.uid === "172351051") {
        us = true;
        who = 'roger';
    }
    else if (props.uid === "1139596293") {
        us = true;
        who = 'hunter';
    }


    if (us) {
        return (
            <>
            <tr className={who}>
                <td>{props.data.handle}</td>
                <td>{props.data.last}</td>
                <td>{props.data.kos}</td>
                <td>{props.data.deaths}</td>
                <td>{props.data.assists}</td>
                <td>{parseInt(props.data.total_damage)}</td>
                <td>{parseInt(props.data.total_taken)}</td>
                <td>{parseInt(props.data.total_heal)}</td>
            </tr>
            </>
        )

    } else {
        return (
            <>
            <tr>
                <td>{props.data.handle}</td>
                <td>{props.data.last}</td>
                <td>{props.data.kos}</td>
                <td>{props.data.deaths}</td>
                <td>{props.data.assists}</td>
                <td>{parseInt(props.data.total_damage)}</td>
                <td>{parseInt(props.data.total_taken)}</td>
                <td>{parseInt(props.data.total_heal)}</td>
            </tr>
            </>
        )
    }
}

export default Row
