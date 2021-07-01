import React, {Component} from 'react';
import axios from "axios";
import Filtr from "./Filtr";
import {Link} from 'react-router-dom';

class BuyurtmaQidirish extends Component {
    state = {
        topilganlar: [],
        isOpen:false
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState({
                    topilganlar: res.data
                });
                console.log(res);
            })
    };
    openModal=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }


    render() {
        const {topilganlar,isOpen} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                      <div className={'col-md-12 mt-3 bg-white  Filtr'}> <button type={'button'} onClick={this.openModal} className={'btn btn-warning text-white'}>Filtrlash</button></div>
                        {topilganlar.map((item, index) => (
                            <div className="col-md-4 MapItem" key={index} >
                                <div className="card" >
                                    <Link className="card-header d-flex  justify-content-between text-center text-decoration-none">
                                        <div className={'d-flex'}>
                                            <p>#{item.id} </p>
                                            <p>Zagruzka</p>
                                        </div>
                                        <p>{item.phone}</p>
                                    </Link>
                                    <Link className="card-body text-decoration-none">
                                        <h5>Age: {item.username}</h5>
                                        <h5>Position: {item.phone}</h5>
                                    </Link>
                                    <Link className={'card-footer d-flex justify-content-between text-decoration-none'}>
                                        <i className="fas fa-truck"></i>
                                        <div>Taklif 1 ta avto</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <Filtr isOpen={isOpen} openModal={this.openModal}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default BuyurtmaQidirish;