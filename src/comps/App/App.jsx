import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './../Home/Home.jsx';
import Classes from './../Classes/Classes.jsx';
import Photography from './../Photography/Photography.jsx';
import Projects from './../Projects/Projects.jsx';
import WAP1 from './../Projects/web-app-proj-1/WAP1.jsx';
import ProjHolder from './../Projects/ProjHolder/ProjHolder.jsx';

import Settings from './../Settings/Settings.jsx';
import ChangeLog from './../ChangeLog/ChangeLog.jsx';
import {Link} from 'react-router';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <BrowserRouter>
            <Settings/>
            <Routes>
                <Route path='/' element={<Home/>}/>  
                <Route path='/courses' element={<Classes/>}/>
                <Route path='/pics' element={<Photography/>}/>
                <Route path='/projects' element={<Projects/>}>
                    <Route index element={<ProjHolder/>}/>
                    <Route path='web-app-proj-1' element={<WAP1/>}/>
                </Route>
                <Route path='/changelog' element={<ChangeLog/>}/>       
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
