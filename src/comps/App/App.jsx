import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './../Home/Home.jsx';
import Classes from './../Classes/Classes.jsx';
import Photography from './../Photography/Photography.jsx';
import Projects from './../Projects/Projects.jsx';
import DLP1 from './../Projects/prem/DLP1.jsx';
import ProjHolder from './../Projects/ProjHolder/ProjHolder.jsx';
import Soon from './../Projects/Soon/Soon.jsx';
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
                    <Route path='prem-market-value' element={<DLP1/>}/>
                    <Route path='numerical/program1' element={<Soon/>}/>
                    <Route path='numerical/program2' element={<Soon/>}/>
                    <Route path='numerical/program3' element={<Soon/>}/>
                    <Route path='numerical/program4' element={<Soon/>}/>
                    <Route path='sci-comp/program1' element={<Soon/>}/>
                    <Route path='sci-comp/program2' element={<Soon/>}/>
                    <Route path='sci-comp/program3' element={<Soon/>}/>
                    <Route path='sci-comp/program4' element={<Soon/>}/>
                    <Route path='sci-comp/program5' element={<Soon/>}/>
                    <Route path='sci-comp/program6' element={<Soon/>}/>
                    <Route path='computer-networks' element={<Soon/>}/>
                    
                </Route>
                <Route path='/changelog' element={<ChangeLog/>}/>       
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
