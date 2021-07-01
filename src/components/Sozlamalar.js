import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SozlamalarXodimlar from "./SozlamalarXodimlar";
import SozlamalarProfile from "./SozlamalarProfile";
import SozlamalarPhone from "./SozlamalarPhone";
class Sozlamalar extends Component {
    state={
        isTrue:true
    }
    sozlamalarOpen=()=>{
        this.setState({
            isTrue:false
        })
    };
    render() {
        const {isTrue}=this.state;
        return (
            <Router>
                <div>
                        {isTrue
                            ?
                           <div className={'container'}>
                               <div className={'row my-5'}>
                                   <button onClick={this.sozlamalarOpen} className={'col-md-6  btn'}>
                                       <Link  className="text-decoration-none text-dark" to="/Carrier/Sozlamalar/SozlamalarXodimlar">
                                           <div className={'card'}>
                                               <div className={'card-body text-center'}>
                                                   <i className="fas fa-users mb-3"/>
                                                   <h5>Xodimlar</h5>
                                               </div>
                                           </div>
                                       </Link>
                                   </button>
                                   <button className={'btn col-md-6 '}>
                                       <Link onClick={this.sozlamalarOpen} to="/Carrier/Sozlamalar/SozlamalarProfile" className="text-decoration-none text-dark">
                                           <div className={'card'}>
                                               <div className={'card-body text-center'}>
                                                   <i className="fas fa-id-card mb-3"/>
                                                   <h5>Profil</h5>
                                               </div>
                                           </div>
                                       </Link>
                                   </button>
                                   <button className={'btn col-md-6'}>
                                       <Link onClick={this.sozlamalarOpen} to="/Carrier/Sozlamalar/SozlamalarPhone" className="text-decoration-none text-dark">
                                           <div className={'card'}>
                                               <div className={'card-body text-center'}>
                                                   <i className="fas fa-phone mb-3"/>
                                                   <h5>Telefon nomerni o'zgartirish</h5>
                                               </div>
                                           </div>
                                       </Link>
                                   </button>
                               </div>
                           </div>
                            :
                            <Switch>
                                <Route path="/Carrier/Sozlamalar/SozlamalarXodimlar">
                                    <SozlamalarXodimlar/>
                                </Route>
                                <Route path="/Carrier/Sozlamalar/SozlamalarProfile">
                                    <SozlamalarProfile/>
                                </Route>
                                <Route path="/Carrier/Sozlamalar/SozlamalarPhone">
                                    <SozlamalarPhone/>
                                </Route>
                            </Switch>
                        }
                </div>
            </Router>
        );
    }
}

export default Sozlamalar;