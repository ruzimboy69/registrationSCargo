import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MenejerQoshish from "./MenejerQoshish";
import HaydovchiQoshish from "./HaydovchiQoshish";


class SozlamalarXodimlar extends Component {
    state={
        activeTab:'1',
        isAdd:true
    };
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };
    addButton=()=>{
        this.setState({
            isAdd:false
        })
        console.log(this.state.isAdd)
    }


    render() {
        const {activeTab,isAdd}=this.state;
        return (
           <Router>
               {isAdd ?
                   <div className=" bg-white">
                       <Nav tabs>
                           <NavItem>
                               <NavLink
                                   onClick={() => { this.changeTab('1'); }}
                               >
                                   Menejerlar
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink
                                   onClick={() => { this.changeTab('2'); }}
                               >
                                   Haydovchilar
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink
                                   onClick={() => { this.changeTab('3'); }}
                               >
                                   Arxiv
                               </NavLink>
                           </NavItem>
                       </Nav>
                       <TabContent activeTab={activeTab}>
                           <TabPane tabId="1">
                               <Row>
                                   <Col>
                                       <p style={{position:"fixed",right:"250px",bottom:"195px"}}>Menejer qo'shish</p>
                                       <button onClick={this.addButton} className={'btn btn-warning text-white font-weight-bold rounded-circle '} style={{position:"fixed",right:"200px",bottom:"200px",padding:"10px 14px"}}>
                                           <Link to="/Carrier/Sozlamalar/MenejerQoshish"><i className="fas fa-plus text-white"></i></Link></button>
                                   </Col>
                               </Row>
                           </TabPane>
                           <TabPane tabId="2">
                               <Row>
                                   <Col>
                                       <p style={{position:"fixed",right:"250px",bottom:"195px"}}>Haydovchi qo'shish</p>
                                       <button onClick={this.addButton} className={'btn btn-warning text-white font-weight-bold rounded-circle '} style={{position:"fixed",right:"200px",bottom:"200px",padding:"10px 14px"}}>
                                           <Link to="/Carrier/Sozlamalar/HaydovchiQoshish"><i className="fas fa-plus text-white"></i></Link></button>
                                   </Col>
                               </Row>
                           </TabPane>
                           <TabPane tabId="3">
                               <Row>
                                   <Col>

                                   </Col>
                               </Row>
                           </TabPane>
                       </TabContent>
                   </div>
                   :
                   <Switch>
                       <Route path="/Carrier/Sozlamalar/MenejerQoshish">
                           <MenejerQoshish/>
                       </Route>
                       <Route path="/Carrier/Sozlamalar/HaydovchiQoshish">
                           <HaydovchiQoshish/>
                       </Route>
                   </Switch>
               }
           </Router>
        );
    }
}

export default SozlamalarXodimlar;