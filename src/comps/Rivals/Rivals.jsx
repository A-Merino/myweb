import { useState, useEffect } from 'react'
import './Rivals.css'
import Matches from './../../assets/data/rivals/all_matches.json';
import MatchOverview from './MatchOverview/MatchOverview.jsx'


function Rivals() {

    let matchdata = Matches

    matchdata.sort(compare)


    return (
        <>
            <div id="rival-head">
                <h1>Marvel Rivals Stat Tracker</h1>
            </div>
            <div id='match-holder'>
                {matchdata.map(match => {
                    // console.log()
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
