import React, {Component} from 'react';
import {
    Col,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import "./filtr.css";
import FiltrParametr from "./FiltrParametr";
import Bildirishnomalar from "./Bildirishnomalar";

class Filtr extends Component {
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
            <div>
              <div className={'container'}>
                  <div className={'row'}>
                      <div className={'col-md-12'}>
                          <Modal className="filtrModal" isOpen={this.props.isOpen} toggle={this.props.openModal} backdrop="static" >
                              <ModalHeader toggle={this.props.openModal}>Filtr
                                  <Nav tabs className={'filtrTab'}>
                                      <NavItem className={'filtrItem'}>
                                          <NavLink
                                              onClick={() => { this.changeTab('1'); }}
                                          >
                                              Parametr
                                          </NavLink>
                                      </NavItem>
                                      <NavItem className={'filtrItem'}>
                                          <NavLink
                                              onClick={() => { this.changeTab('2'); }}
                                          >
                                              Xabarnomalar
                                          </NavLink>
                                      </NavItem>
                                  </Nav>
                              </ModalHeader>
                              <ModalBody>
                                  <div className=" bg-white">
                                      <TabContent activeTab={activeTab}>
                                          <TabPane tabId="1">
                                              <Row>
                                                  <Col>
                                                      <FiltrParametr/>
                                                  </Col>
                                              </Row>
                                          </TabPane>
                                          <TabPane tabId="2">
                                              <Row>
                                                  <Col>
                                                      <Bildirishnomalar/>
                                                  </Col>
                                              </Row>
                                          </TabPane>
                                      </TabContent>
                                  </div>
                              </ModalBody>
                          </Modal>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default Filtr;