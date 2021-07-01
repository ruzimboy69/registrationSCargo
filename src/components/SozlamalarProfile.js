import React from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import {useState} from "react";
import ProfileQoshish from "./ProfileQoshish";
import KompaniyaProfili from "./KompaniyaProfili";

function SozlamalarProfile() {
    const [activeTab,setActiveTab]=useState("1");

    function changeTab(tab) {
        setActiveTab(tab)
    }
    return (
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    onClick={() => { changeTab('1'); }}
                                >
                                    Mening Profilim
                                </NavLink>
                            </NavItem >
                            <NavItem >
                                <NavLink
                                    onClick={() => { changeTab('2'); }}
                                >
                                    Kompaniya Profili
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div className={'card-body'}>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col>
                                            <ProfileQoshish/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col>
                                            <KompaniyaProfili/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SozlamalarProfile;