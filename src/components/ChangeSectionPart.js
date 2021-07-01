import React, {useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch,useHistory} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

function ChangeSectionPart(props) {
    let changePath=useHistory();

    return (
        <div>
            <Button color="danger" onClick={props.isOpen}>bos</Button>
            <Modal isOpen={props.modal} toggle={props.isOpen} >
                <ModalHeader toggle={props.isOpen}>Modal title</ModalHeader>
                <ModalBody>
                    <button onClick={()=>{changePath.push("/Carrier")}} className={'btn btn-warning text-white font-weight-bold rounded-circle '} >
                        <i className="fas fa-plus text-white"></i></button>
                    <button onClick={()=>{changePath.push("/Sender")}} className={'btn btn-warning text-white font-weight-bold rounded-circle '} >
                        <i className="fas fa-plus text-white"></i></button>
                    <button onClick={()=>{changePath.push("/Driver")}} className={'btn btn-warning text-white font-weight-bold rounded-circle '} >
                        <i className="fas fa-plus text-white"></i></button>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ChangeSectionPart;
