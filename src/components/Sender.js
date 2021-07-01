import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch,useHistory} from "react-router-dom";
import Sozlamalar from "./Sozlamalar";
import TransportPart from "./TransportPart";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import MyLoads from "./Sender/MyLoads";
import AddCargo from "./Sender/AddCargo";

function Sender() {
let changePath=useHistory();
    const [modal,setModal]=useState(false);
    function openModal (){
        setModal(!modal);
    }
    return (
        <Router>
            <div className={'sidebar'}>
                <div className={"left-site"}>
                    <div className={'container'}>
                        <div className={'row '}>
                            <div className={'col-md-12 p-0 '}>
                                <ul>
                                    <li className={'list-unstyled'}>
                                        <Link  onClick={openModal} to={"/Sender/Dashboard"}><img src={"https://app.scargos.com/images/sender-icon-active.svg"}
                                                                     className={'img-fluid rounded-circle'}/>Jonatuvchi</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Sender/MyLoads"}>Mening yuklarim</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Sender/AddCargo"}> Yuk qo'shish</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Sender/transport"}>Yuk tashuvchi izlash</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Sender/sozlamalar"}>Sozlamalar</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"right-site"}>
                    <div className={'containertab pl-5'}>
                        <div className={'row'}>
                            <div style={{width: "100%", marginTop: "34px"}}>
                                <Switch>
                                    <Route path="/Sender/Dashboard">
                                        <Modal isOpen={modal} toggle={openModal} >
                                            <ModalHeader toggle={openModal}></ModalHeader>
                                            <ModalBody className={'text-center'}>
                                                <p>Davom ettirish...</p>
                                                <div className={'CarrierPart text-center px-5'}>
                                                    <div className={'Carrier d-flex justify-content-center '} >
                                                        <img src={"https://app.scargos.com/images/carrier-icon-active.svg"}
                                                             className={'img-fluid rounded-circle mr-4'}/>
                                                        <h5 className={'mt-4 mx-3'}>Tashuvchi</h5>
                                                    </div>
                                                    <button onClick={()=>{changePath.push("/Carrier")}} className={'Carrierbtn btn btn-block my-3 '} style={{backgroundColor:'#a17d32',color:"#fff"}} >Buyurtma qidirish</button>
                                                </div>
                                                <div className={'SenderPart text-center px-5 my-3'}>
                                                    <div className={'Sender d-flex justify-content-center '}>
                                                        <img src={"https://app.scargos.com/images/sender-icon-active.svg"}
                                                             className={'img-fluid rounded-circle mr-3'}/>
                                                        <h5 className={'mt-4 mx-3'}>Jo'natuvchi</h5>
                                                    </div>
                                                    <button onClick={()=>{changePath.push("/Sender")}} className={"Senderbtn btn btn-block my-3"} style={{backgroundColor:"#6d718b",color:"#fff"}}  >Yuk qo'shish</button>
                                                </div>
                                                <div className={'DriverPart text-center px-5'}>
                                                    <div className={'Driver d-flex justify-content-center '} >
                                                        <img src={"https://app.scargos.com/images/driver-icon-active.svg"}
                                                             className={'img-fluid rounded-circle mr-3'} style={{width:'100px',height:"100px"}}/>
                                                        <h5 className={'mt-4 mx-3'}>Haydovchi</h5>
                                                    </div>
                                                    <button onClick={()=>{changePath.push("/Driver")}} className={"Driverbtn btn btn-block my-3"} style={{backgroundColor:"#4f593f",color:"#fff"}} >Joriy buyurtma</button>
                                                </div>
                                            </ModalBody>
                                        </Modal>
                                    </Route>
                                    <Route exact path="/Sender/MyLoads">
                                        <MyLoads/>
                                    </Route>
                                    <Route path="/Sender/AddCargo">
                                        <AddCargo/>
                                    </Route>
                                    <Route path="/Sender/transport">
                                        <TransportPart/>
                                    </Route>
                                    <Route path="/Sender/sozlamalar">
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

export default Sender;