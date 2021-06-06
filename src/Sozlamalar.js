import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Xodimlar from "./Xodimlar";
class Sozlamalar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-6'}>
                                <div className={'card'}>
                                    <div className={'card-body'}>
                                        <Link to={"/Xodimlar"}>Xodimlar</Link>
                                    </div>
                                    <div className={'card-footer'}>
                                        <Switch>
                                            <Redirect to={'Xodimlar'}>
                                                <Xodimlar/>
                                            </Redirect>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Sozlamalar;