import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
class MyLoads extends Component {
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
                    <NavItem>
                        <NavLink
                            onClick={() => { this.changeTab('1'); }}
                        >
                            Yangi
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => { this.changeTab('2'); }}
                        >
                            Aktiv
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

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
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
        );
    }
}

export default MyLoads;