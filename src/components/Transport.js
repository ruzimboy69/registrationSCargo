import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    useHistory
} from "react-router-dom";
import {useState} from "react";
import TransportQoshish from "./TransportQoshish";
function Transport(props) {
    let history=useHistory();
    const [activeTab,setActiveTab]=useState("1");
    const [isOpen,setIsOpen]=useState(true);
    function addTransport (){
        setIsOpen(false)
    }
    function changeTab(tab) {
        setActiveTab(tab)
    }
    return (
        <div>
            <div className=" bg-white">
                <Nav tabs>
                    <NavItem className={'transportNav'}>
                        <NavLink
                            onClick={() => { changeTab('1'); }}
                        >
                            Aktiv
                        </NavLink>
                    </NavItem >
                    <NavItem className={'transportNav'}>
                        <NavLink
                            onClick={() => { changeTab('2'); }}
                        >
                            Arxiv
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                                <p style={{position:"fixed",right:"250px",bottom:"195px"}}>Transport qo'shish</p>
                                <button onClick={()=>{history.push("/Carrier/TransportQoshish")}} className={'btn btn-warning text-white font-weight-bold rounded-circle '} style={{position:"fixed",right:"200px",bottom:"200px",padding:"10px 14px"}}>
                                    <i className="fas fa-plus text-white"></i></button>

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}

export default Transport;