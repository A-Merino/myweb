import { useState, useEffect } from 'react'
import './Rivals.css'
import Matches from './../../assets/data/rivals/all_matches.json';
import MatchOverview from './MatchOverview/MatchOverview.jsx'
import UIDS from './../../assets/data/rivals/uids.json';


function Rivals() {
    const uids = UIDS;
    let matchdata = Matches;
    matchdata.sort(compare);

    const [shown, setShown] = useState(matchdata);
    const [players, modPlayers] = useState([false,false,false,false,false,false]);

    const filter = (e) => {
        console.log(e)
        const matches = []
        const pp = []
        // uids.map(uid => {

        //     const cl = document.getElementById(uid.user);


        //     if (cl.checked === true) {
        //         pp.push(cl);

        //         matchdata.map(match => {
        //             const matchid = Object.keys(match)[0];
        //             if (match[matchid].uids.includes(uid.uid.toString()) && !(matches.includes(match))) {
        //                 matches.push(match);

        //             }

        //         });
        //     }
        // });

        uids.map(uid => {

            const cl = document.getElementById(uid.uid);

            if (cl.checked === true) {
                pp.push(cl);
            }
        });



        for (const match in matchdata) {
            let fact = true;
            const matchid = Object.keys(match)[0];

            for (const pl in pp) {
                if (!(match[matchid].uids.includes(pl.id))){
                    fact = false;
                    
                }
            }

            if (fact) {
                matches.push(match);

            }



        } 
        

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
                {
                    uids.map(uid => {
                        return (
                            <label><input onClick={filter} key={uid.uid} id={uid.uid} type="checkbox"/>{uid.user}</label>
                            )
                    })
                }
            </div>
            <div id='match-holder'>
                {shown.map(match => {
                    return <MatchOverview data={match} key={Object.keys(match)[0]}/>
                })
            }
            </div>
        </>
    )
}

const compare = (a, b) => {
    const time_a = parseInt(Object.keys(a)[0].split('_')[1])
    const time_b = parseInt(Object.keys(b)[0].split('_')[1])
    if (time_a < time_b) {
        return -1;

    } else {
        return 1;
    }
}


export default Rivals
