import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import Transport from "./Transport";
import TransportQoshish from "./TransportQoshish";

function TransportPart(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/Carrier/Transport" component={Transport}/>
                    <Route path="/Carrier/TransportQoshish" component={TransportQoshish}/>
                </Switch>
            </Router>
        </div>
    );
}

export default TransportPart;