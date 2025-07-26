import { useState, useEffect } from 'react'
import './Rivals.css'
import Matches from './../../assets/data/rivals/all_matches.json';
import MatchOverview from './MatchOverview/MatchOverview.jsx'
import UIDS from './../../assets/data/rivals/uids.json';


function Rivals() {
    const uids = UIDS;
    let matchdata = Matches;
    matchdata.sort(compare);
    matchdata.reverse();
    // determinePlayers(matchdata[0], uids);

    const [shown, setShown] = useState(matchdata);
    const [players, modPlayers] = useState([false,false,false,false,false,false]);

    const filter = (e) => {
        console.log(e)
        const matches = []
        const pp = []
        uids.map(uid => {

            const cl = document.getElementById(uid.uid);


            if (cl.checked === true) {
                pp.push(cl);

                matchdata.map(match => {
                    if (match.uids.includes(uid.uid.toString()) && !(matches.includes(match))) {
                        matches.push(match);

                    }

                });
            }
        });

        
        if (matches.length === 0) {
            setShown(matchdata);

        } else {
            setShown(matches);

        }


    }

    return (
        <>
            <div id="rival-head">
                <h1>Marvel Rivals Stat Tracker</h1>
                <div id="choose-players">
                {
                    uids.map(uid => {
                        return (
                            <label className={uid.name}><input onClick={filter} key={uid.uid} id={uid.uid} type="checkbox"/>{uid.user}</label>
                            )
                    })
                }</div>
            </div>
            <div id='match-holder'>
                {shown.map(match => {
                    return <MatchOverview data={match} uids={uids} key={match.match_id}/>
                })
            }
            </div>
        </>
    )
}

const compare = (a, b) => {
    const time_a = parseInt(a.match_id.split('_')[1])
    const time_b = parseInt(b.match_id.split('_')[1])
    if (time_a < time_b) {
        return -1;

    } else {
        return 1;
    }
}

function determinePlayers(match, uids) {
    let pla = [false,false,false,false,false,false]
    uids.map(uid => {
                if(!match.uids.includes(uid.uid)) {
                   return;}
                else if (match.uids.includes(uid.uid) && uid.name === 'ryan') {
                    pla[0] = true
                } else if (match.uids.includes(uid.uid) && uid.name === 'alex') {
                    pla[1] = true
                } else if (match.uids.includes(uid.uid) && uid.name === 'sean') {
                    pla[2] = true
                } else if (match.uids.includes(uid.uid) && uid.name === 'jj') {
                    pla[3] = true
                } else if (match.uids.includes(uid.uid) && uid.name === 'roger') {
                    pla[4] = true
                } else if (match.uids.includes(uid.uid) && uid.name === 'hunter') {
                    pla[5] = true
                }
            })
    console.log(pla)
}


export default Rivals
