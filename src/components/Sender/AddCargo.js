import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";
import "./addCargoStyle.css"

class AddCargo extends Component {
    state={
        inputs:[],
        secondInputs:[],
        cost:false
    }
    addCost=()=>{
        this.setState({
            cost:!this.state.cost
        });
    };
    addInput=()=>{
        this.setState({
            inputs:[...this.state.inputs,""],
        })
    };
    addSecondInput=()=>{
        this.setState({
            secondInputs:[...this.state.secondInputs,""],
        })
    };
    handleChange=(e,index)=>{
        this.state.inputs[index]=e.target.value;
        this.setState({
            inputs:this.state.inputs
        })
    }
    handleSecondChange=(e,index)=>{
        this.state.secondInputs[index]=e.target.value;
        this.setState({
            secondInputs:this.state.secondInputs
        })
    }
    handleRemove=(index)=>{
        this.state.inputs.splice(index,1);
        this.setState({
            inputs:this.state.inputs
        })
    }
    handleSecondRemove=(index)=>{
        this.state.secondInputs.splice(index,1);
        this.setState({
            secondInputs:this.state.secondInputs
        })
    }
    render() {
        const {inputs,secondInputs,cost}=this.state;
        return (
            <div className={'container'}>
                <div className={'row my-5 ml-5'}>
                    <div className={'col-md-12'}>
                        <div className={'card border-0'}>
                            <div className={"card-body d-flex justify-content-between flex-wrap px-0 shadow-lg"}>
                                <div className={'col-md-12 border-bottom'}>
                                    <h5>Marshrut</h5>
                                </div>
                                <div className={'col-md-12 my-3 border-bottom'}>

                                        <AvForm className={'d-flex col-md-5 justify-content-between '}>
                                            <AvField
                                                type="date"
                                                name="FromShipmentDate"
                                                label="Jo'natma sanasi ...sanadan"
                                                required
                                            />
                                            <AvField
                                                type="date"
                                                name="ToShipmentDate"
                                                label="...sanagacha"
                                                required
                                            />
                                        </AvForm>
                                </div>
                                <div className={'col-md-12 my-3 border-bottom d-flex'}>
                                    <AvForm className={"col-md-6"}>
                                        <AvField
                                            type="text"
                                            name="text1"
                                            label="Yuklash joyi:"
                                            placeholder="Qayerdan"
                                            required
                                        />
                                        {inputs.map((item,index)=> {
                                           return (
                                              <div className={'addCargoDiv'} key={index}>
                                                  <AvField
                                                      onChange={(e)=>this.handleChange(e,index)}
                                                      value={item}
                                                      type="text"
                                                      name="text1"
                                                      placeholder="Qayerdan"
                                                      required
                                                  />
                                                  <button className={"btn addCargoBtn"} onClick={()=>this.handleRemove(index)}><i
                                                      className="fas fa-times"></i></button>
                                              </div>
                                           )
                                        })}
                                        <button onClick={()=>this.addInput()}  type="submit" className={"btn text-primary"}>
                                            <i className="fas fa-plus-square mr-2"></i>Yuklash joyini qo'shish</button>
                                    </AvForm>
                                    <AvForm className={"col-md-6"}>
                                        <AvField

                                            type="text"
                                            name="tex2"
                                            label="Tushurish joyi:"
                                            placeholder="Qayerga"
                                            required
                                        />
                                        {secondInputs.map((item,index)=> {
                                            return (
                                                <div className={'addCargoDiv'} key={index}>
                                                    <AvField
                                                        onChange={(e)=>this.handleSecondChange(e,index)}
                                                        value={item}
                                                        type="text"
                                                        name="text1"
                                                        placeholder="Qayerdan"
                                                        required
                                                    />
                                                    <button className={"btn addCargoBtn"} onClick={()=>this.handleSecondRemove(index)}><i
                                                        className="fas fa-times"></i></button>
                                                </div>
                                            )
                                        })}
                                        <button onClick={()=>this.addSecondInput()}  type="submit" className={"btn text-primary"}>
                                            <i className="fas fa-plus-square mr-2"></i>Tushirish joyini qo'shish</button>
                                    </AvForm>

                                </div>
                                <div className={'col-md-12 my-3 border-bottom'}>
                                    <h5>Yuk ma'lumotlari</h5>
                                    <div className={'d-flex justify-content-between'}>
                                        <AvForm className={'mt-3 col-md-7 '}>
                                            <AvField
                                                type="select"
                                                name="NatureLoads"
                                                label="Yuk turi:"
                                                required
                                            >
                                                <option>Jihoz</option>
                                                <option>Metal</option>
                                                <option>Qurilish mollari</option>
                                                <option>Mebel</option>
                                                <option>Don mahsulotlari</option>
                                                <option>Avtomobil</option>
                                            </AvField>
                                        </AvForm>
                                        <AvForm className={' mt-3 d-flex col-md-5 justify-content-between '}>
                                            <AvField
                                                className={"px-2"}
                                                type="text"
                                                name="WeightLoad"
                                                label="Og'irligi:"
                                                placeholder={'Og"irlik,t'}
                                                required
                                            />
                                            <AvField
                                                className={"px-2"}
                                                type="text"
                                                name="VolumeLoad"
                                                label="Hajmi:"
                                                placeholder={'Hajmi,m3'}
                                                required
                                            />
                                        </AvForm>
                                    </div>
                                </div>
                                <div className={'col-md-12 my-3 border-bottom'}>
                                    <h5>Transport ma'lumotlari</h5>
                                    <div className={'d-flex justify-content-between'}>
                                        <AvForm className={'mt-3 col-md-7 '}>
                                            <AvField
                                                type="select"
                                                name="TransportType"
                                                label="Transport turi:"
                                                required
                                            >
                                                <option>Avtokran</option>
                                                <option>Refrigerator</option>
                                                <option>Avtobus</option>
                                                <option>MiniAvtobus</option>
                                                <option>Kamaz</option>
                                                <option>Truck</option>
                                                <option>Ekskovator</option>
                                            </AvField>
                                        </AvForm>
                                        <AvForm className={' mt-3 d-flex col-md-5 justify-content-between '}>
                                            <AvField
                                                className={"px-2"}
                                                type="text"
                                                name="NumberofCars"
                                                label="Moshinalar soni:"
                                                placeholder={"Moshinalar soni"}
                                                required
                                            />
                                        </AvForm>
                                    </div>
                                </div>
                                <div className={'col-md-12 my-3 border-bottom'}>

                                        <h4>Narx</h4>
                                        <form className={"my-3"}>
                                            <div className="custom-control custom-switch">
                                                <input onChange={this.addCost} type="checkbox" className="custom-control-input" id="switch1" name="example"/>
                                                <label className="custom-control-label" htmlFor="switch1">Transport narxini ko'rsatish</label>
                                            </div>
                                        </form>
                                        {cost ?
                                            <AvForm className={"d-flex justify-content-between col-md-8"}>
                                                <AvField
                                                    type="text"
                                                    name="priceTransport"
                                                   placeholder="Narxi"
                                                    required
                                                />
                                                <AvField
                                                    type="select"
                                                    name="Currency"
                                                    required
                                                >
                                                    <option>Sum</option>
                                                    <option>Rubl</option>
                                                    <option>Usd</option>
                                                    <option>Eur</option>
                                                    <option>Tenge</option>
                                                </AvField>
                                                <AvField
                                                    type="select"
                                                    name="Nds"
                                                    required
                                                >
                                                    <option>QQS bilan</option>
                                                    <option>QQS siz</option>
                                                </AvField>
                                                <AvField
                                                    type="text"
                                                    name="dayofPayment"
                                                    placeholder="To'lov kuni"
                                                />
                                            </AvForm>
                                            :
                                            " "
                                        }
                                </div>
                            </div>
                        </div>
                        <div className={'text-right my-3'}>
                            <button className={'btn btn-warning p-2 text-white font-weight-bold'}>Haydovchi  qo'shish</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCargo;