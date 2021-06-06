import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import axios from "axios";
import {Modal, ModalBody} from "reactstrap";

class BuyurtmaQidirish extends Component {
    state = {
        topilganlar: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState({
                    topilganlar: res.data
                });
                console.log(res);
            })
    }


    render() {
        const {topilganlar} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {topilganlar.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card my-2">
                                    <div className="card-header d-flex  justify-content-between text-center">
                                       <div className={'d-flex'}>
                                           <p>#{item.id} </p>
                                           <p>Zagruzka</p>
                                       </div>
                                        <p>{item.phone}</p>
                                    </div>
                                    <div className="card-body">
                                        <h5>Age: {item.username}</h5>
                                        <h5>Position: {item.phone}</h5>
                                    </div>
                                    <div className={'card-footer d-flex justify-content-between'}>
                                        <i className="fas fa-truck"></i>
                                        <div>Taklif 1 ta avto</div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default BuyurtmaQidirish;