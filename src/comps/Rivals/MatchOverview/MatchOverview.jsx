import { useState, useEffect } from 'react'
import './MatchOverview.css'
import {faX} from '@fortawesome/free-solid-svg-icons/faX'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Row from './Row/Row.jsx'
import MAPS from './../../../assets/data/rivals/maps.json';


function MatchOverview(props) {

    const maps = MAPS;
    const [click, setClick] = useState(false);

    const [r, sr] = useState(false);
    const [a, sa] = useState(false);
    const [s, ss] = useState(false);
    const [j, sj] = useState(false);
    const [d, sd] = useState(false);
    const [h, sh] = useState(false);


    const data = props.data;
    const matchid = data.match_id;

    useEffect(() => {
    props.uids.map(uid => {
                if(!data.uids.includes(uid.uid)) {
                   return;}
                else if (data.uids.includes(uid.uid) && uid.name === 'ryan') {
                    sr(true);
                } else if (data.uids.includes(uid.uid) && uid.name === 'alex') {
                    sa(true);
                } else if (data.uids.includes(uid.uid) && uid.name === 'sean') {
                    ss(true);
                } else if (data.uids.includes(uid.uid) && uid.name === 'jj') {
                    sj(true);
                } else if (data.uids.includes(uid.uid) && uid.name === 'roger') {
                    sd(true);
                } else if (data.uids.includes(uid.uid) && uid.name === 'hunter') {
                    sh(true);
                }
            })

},[])

    const findMap = (mapID) => {
        let mN = ""
        maps.map(map => {
            if (map.id === mapID) {
                mN = map.name;
            } else {
                return;
            }
        })

        return mN
    }

    const detLen = (time) => {
        let min = Math.floor(time / 60);
        let sec = Math.ceil(time % 60);
        return `${min}m ${sec}s`
    }

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
        const pdata = data.players[0];

        const itself = document.getElementById(matchid);
         if (pdata.team === 0 && pdata.won === 1) {
            return <span className="ta">Team A</span>
        } else if (pdata.team === 1 && pdata.won === 0) {
            return <span className="ta">Team A</span>
        } else if (pdata.team === 1 && pdata.won === 1) {
            return <span className="tb">Team B</span>
        } else {
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
                            {data.players.map(player => {
                                if (player.team === 0) {
                                    return <Row key={player.uid} uid={player.uid} data={player}/>
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
                            {data.players.map(player => {
                                if (player.team === 1) {
                                    return <Row key={player.uid} uid={player.uid} data={player}/>
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
                <div className='thin-info'>
                    <p>{data.game_mode} -- {findMap(props.data.map)}</p>
                    <p>Season: {props.data.season}</p>
                    <p>Length: {detLen(props.data.length)}</p>
                    <p>{printed()}</p>
                </div>
                <div className="diagBox">
                    {r === true && <div id="ryandp" title="Ryan" className="diagPart"></div>}
                    {a === true && <div id="alexdp" title="Alex" className="diagPart"></div>}
                    {s === true && <div id="seandp" title="Sean" className="diagPart"></div>}
                    {j === true && <div id="jjdp" title="JJ" className="diagPart"></div>}
                    {d === true && <div id="rogerdp" title="Roger" className="diagPart"></div>}
                    {h === true && <div id="hunterdp" title="Hunter" className="diagPart"></div>}
                </div>
            </div>
            
            </>
        )

    }

}

export default MatchOverview
