import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import ThreeSections from "./components/ThreeSections";
import Carrier from "./components/Carrier";
import Sender from "./components/Sender";


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route>
                        <Navbar/>
                       <ThreeSections/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}


export default App;