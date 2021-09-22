import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route,} from "react-router-dom"
import {Main} from "./components/Main/Main";
import {AboutMe} from "./components/AboutMe/AboutMe";

const App = () => {

    return (

        <BrowserRouter>
            <div className="content-wrapper">
                <div className={"content-sidebar"}>
                <Sidebar/>
                </div>

                <div className="content-main">

                    <Route  path="/main" render={()=><Main/> }/>
                    <Route  path="/aboutMe" render={()=><AboutMe/>}/>




                </div>


            </div>
        </BrowserRouter>

    )
}

export default App;
