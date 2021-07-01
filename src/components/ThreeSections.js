import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import Carrier from "./Carrier";
import Sender from "./Sender";
import Driver from "./Driver";

function ThreeSections(props) {
    return (
       <div>
           <Router>
               <Switch>
                   <Route exact={true} path={"/"} component={Carrier}/>
                   <Route path={"/Carrier"} component={Carrier}/>
                   <Route path={"/Sender"} component={Sender}/>
                   <Route path={"/Driver"} component={Driver}/>
               </Switch>
           </Router>
       </div>
    );
}

export default ThreeSections;