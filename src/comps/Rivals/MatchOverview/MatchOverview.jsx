import { useState } from 'react'
import './MatchOverview.css'

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

    if (click) {
        return (
            <>
                <div className='match-deets' onClick={changeDisp}>
                    
                    <table>
                        <thead>
                            <tr>
                                <td>Username</td>
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
                    <table>
                        <thead>
                            <tr>
                                <td>Username</td>
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
            <div className='thin-view' onClick={changeDisp}>
                <p>Match ID: {matchid}</p>
                <p>{printed()}</p>
            </div>
            </>
        )

    }

}

export default MatchOverview
