import { useState } from 'react'
import './MatchOverview.css'
import {faX} from '@fortawesome/free-solid-svg-icons/faX'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function MatchOverview(props) {

    const [click, setClick] = useState(false);

    const matchid = Object.keys(props.data)[0];

    const data = props.data[matchid];


    const changeDisp = (e) => {
        e.preventDefault();
        setClick(!click);
    };


    const printed = () => {
        // have to multiply by 1000 since javascript likes milliseconds
        const date = new Date(parseInt(matchid.split('_')[1]) * 1000);
        return date.toLocaleString();
    } 

    const detWinner = () => {
        const pdata = data.players[0][Object.keys(data.players[0])[0]];

        const itself = document.getElementById(matchid);
         if (pdata.team === 0 && pdata.won === 1) {
            return <span className="ta">Team A</span>
        } else if (pdata.team === 1 && pdata.won === 0) {
            return <span className="ta">Team A</span>
        } else if (pdata.team === 1 && pdata.won === 1) {
            // itself.querySelector('span').style.color = ;
            return <span className="tb">Team B</span>
        } else {
            // itself.querySelector('span').style.color = ;
            return <span className="tb">Team B</span>
        }
    }

    if (click) {
        return (
            <>
                <div className='match-deets' id={matchid}>
                    <div className='match-head'>
                        <p>Game Mode: {data.game_mode}</p>
                        <p>Match Winner: {detWinner()}</p>
                    <div className='close-table' onClick={changeDisp}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                    </div>
                    <table className='team-a'>
                        <thead>
                            <tr>
                                <td>Team A</td>
                                <td>Hero</td>
                                <td>KOs</td>
                                <td>Deaths</td>
                                <td>Assists</td>
                                <td>Total Damage</td>
                                <td>Total Blocked</td>
                                <td>Total Healed</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.players.map(p => {
                                const player = p[Object.keys(p)[0]]
                                if (player.team === 0) {
                                    return (<>
                                        <tr>
                                            <td>{player.handle}</td>
                                            <td>{player.last}</td>
                                            <td>{player.kos}</td>
                                            <td>{player.deaths}</td>
                                            <td>{player.assists}</td>
                                            <td>{parseInt(player.total_damage)}</td>
                                            <td>{parseInt(player.total_taken)}</td>
                                            <td>{parseInt(player.total_heal)}</td>
                                            </tr>
                                    </>)
                                }
                            })}
                        </tbody>
                    </table>
                    <table className='team-b'>
                        <thead>
                            <tr>
                                <td>Team B</td>
                                <td>Hero</td>
                                <td>KOs</td>
                                <td>Deaths</td>
                                <td>Assists</td>
                                <td>Total Damage</td>
                                <td>Total Blocked</td>
                                <td>Total Healed</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.players.map(p => {
                                const player = p[Object.keys(p)[0]]
                                if (player.team === 1) {
                                    return (<>
                                        <tr>
                                            <td>{player.handle}</td>
                                            <td>{player.last}</td>
                                            <td>{player.kos}</td>
                                            <td>{player.deaths}</td>
                                            <td>{player.assists}</td>
                                            <td>{parseInt(player.total_damage)}</td>
                                            <td>{parseInt(player.total_taken)}</td>
                                            <td>{parseInt(player.total_heal)}</td>
                                            </tr>
                                    </>)
                                }
                            })}
                        </tbody>
                    </table>


                </div>
            </>
        )

    } else {
        return (
            <>
            <div className='thin-view' id={matchid} onClick={changeDisp}>
                <p>Match ID: {matchid}</p>
                <p>{printed()}</p>
            </div>
            </>
        )

    }

}

export default MatchOverview
