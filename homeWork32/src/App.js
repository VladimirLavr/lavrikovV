import "./App.css";
import {Content} from "./components/Content/Content";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Orders} from "./components/Orders/Orders";
import React from "react";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Content/>}/>
                    <Route path='/order' element={<Orders/>}/>
                </Routes>
            </Router>

        </div>
    )
}

export default App;
