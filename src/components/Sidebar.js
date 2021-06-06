import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Buyurtmalar from "./Buyurtmalar";
import BuyurtmaQidirish from "./BuyurtmaQidirish";
import Transport from "./Transport";
import Sozlamalar from "../Sozlamalar";
class Sidebar extends Component {
    state={
        sidebar:true
    };

    openSidebar=()=>{
        this.setState({
            sidebar:!this.state.sidebar
        })
    }
    render() {
        const {sidebar}=this.state;
        return (
            <Router>
                <div className={'sidebar'}>
                    <div className={ "left-site"}>
                        <div className={'container'}>
                            <div className={'row my-2'}>
                                <div className={'col-md-12 p-0 my-5'}>
                                    <ul >
                                        <li className={'list-unstyled'}>
                                            <Link to={"/Dashboard"}><img src={"images/logo.jpg"} className={'img-fluid rounded-circle'}/> Yuk tashuvchi</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/buyurtmalar"}>Buyurtmalar</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/qidirish"}> Qidirish</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/transport"}>Transport</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/sozlamalar"}>Sozlamalar</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ "right-site"}>
                        <div className={'navbar'}>
                        </div>
                        <div className={'containertab pl-5'}>
                            <div className={'row'}>
                                <div style={{width:"100%"}}>
                                    <Switch>
                                        <Route path="/Dashboard" exact>

                                        </Route>
                                        <Route path="/buyurtmalar">
                                            <Buyurtmalar/>
                                        </Route>
                                        <Route path="/qidirish">
                                           <BuyurtmaQidirish/>
                                        </Route>
                                        <Route path="/transport">
                                            <Transport/>
                                        </Route>
                                        <Route path="/sozlamalar">
                                           <Sozlamalar/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Sidebar;