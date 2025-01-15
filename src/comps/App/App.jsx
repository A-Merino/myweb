import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Nav from './../Nav/Nav.jsx';
import Home from './../Home/Home.jsx';
import CCHolder from './../CCHolder/CCHolder.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    
                    <Route path='/classes' element={<CCHolder/>}/>
                    {/*<Route path='/' element={<Projects/>}/>
                    <Route path='/' element={<Picturesd/>}/>
                     */}   
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
