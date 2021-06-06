import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {AvForm,AvField} from 'availity-reactstrap-validation';
class Buyurtmalar extends Component {
    state={
        activeTab:'1'
    };
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };


    render() {
        const {activeTab}=this.state;
        return (
            <div className=" bg-white">
                <Nav tabs>
                    <NavItem className={'transportNav'}>
                        <NavLink
                            onClick={() => { this.changeTab('1'); }}
                        >
                            Aktiv
                        </NavLink>
                    </NavItem >
                    <NavItem className={'transportNav'}>
                        <NavLink
                            onClick={() => { this.changeTab('2'); }}
                        >
                            Arxiv
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>

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
        );
    }
}

export default Buyurtmalar;