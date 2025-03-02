import { useState } from 'react'
import './WAP1.css'

function WAP1() {

    const changeSize = () => {
        let frame = document.querySelector("#wap1-frame");
        frame.width = frame.contentWindow.document.body.scrollWidth;
        frame.height = frame.contentWindow.document.body.scrollHeight;
        console.log(frame.width, frame.height)

    }


        
    return (
        <>
        <iframe id="wap1-frame" onLoad={changeSize} scrolling='no' src="/src/assets/statics/web-app-proj-1/index.html"></iframe>
        </>
    )
}

export default WAP1
