import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './../Home/Home.jsx';
import Classes from './../Classes/Classes.jsx';
import Photography from './../Photography/Photography.jsx';
import Projects from './../Projects/Projects.jsx';
import Settings from './../Settings/Settings.jsx';
import ChangeLog from './../ChangeLog/ChangeLog.jsx';

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
                <Route path='/projs' element={<Projects/>}/>
                <Route path='/changelog' element={<ChangeLog/>}/>       
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
