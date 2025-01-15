import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './../Home/Home.jsx';
import Classes from './../Classes/Classes.jsx';
import Photography from './../Photography/Photography.jsx';
import Projects from './../Projects/Projects.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>  
                <Route path='/classes' element={<Classes/>}/>
                <Route path='/pics' element={<Photography/>}/>
                <Route path='/projs' element={<Projects/>}/>
                        
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
