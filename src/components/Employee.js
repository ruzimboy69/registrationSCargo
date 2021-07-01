import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import axios from "axios";
import {Modal, ModalBody} from "reactstrap";

class Employee extends Component {
    
    state = {
        employees: [],
        openModal: false,
        selectIndex: -1
    };

    componentDidMount() {
        axios.get('https://uzcargos.herokuapp.com/list_student')
            .then((res) => {
                this.setState({
                    employees: res.data
                });
                console.log(res);
            })
    }
    render() {
        const {employees} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {employees.map((item, index) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="card my-2">
                                    <div className="card-body">
                                        <h5>Age: {item.email}</h5>
                                        <h5>Salary: {item.password}</h5>
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

export default Employee;