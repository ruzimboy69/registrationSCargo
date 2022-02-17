import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
} from "react-router-dom";
import {useState} from "react";
import MenejerQoshish from "./MenejerQoshish";
import HaydovchiQoshish from "./HaydovchiQoshish";


function SozlamalarXodimlar(props) {
    const [activeTab,setActiveTab]=useState("1");
    function changeTab(tab) {
        setActiveTab(tab);
    }
    return (
        <div>
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
                                <button onClick={()=>{history.push("/Carrier/Sozlamalar/SozlamalarXodimlar/MenejerQoshish")}} className={'btn btn-warning text-white font-weight-bold rounded-circle '} style={{position:"fixed",right:"200px",bottom:"200px",padding:"10px 14px"}}>
                                    <i className="fas fa-plus text-white"></i></button>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <p style={{position:"fixed",right:"250px",bottom:"195px"}}>Haydovchi qo'shish</p>
                                <button onClick={()=>{history.push("/Carrier/Sozlamalar/SozlamalarXodimlar/HaydovchiQoshish")}} className={'btn btn-warning text-white font-weight-bold rounded-circle '} style={{position:"fixed",right:"200px",bottom:"200px",padding:"10px 14px"}}>
                                    <i className="fas fa-plus text-white"></i></button>
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
        </div>
    )
}
export default SozlamalarXodimlar;
