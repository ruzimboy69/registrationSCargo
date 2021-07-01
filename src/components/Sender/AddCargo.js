import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";

class AddCargo extends Component {
    state={
        inputs:[]
    }
    addInput=()=>{
        this.setState({
            inputs:[...this.state.inputs,""]
        })
    }
    handleChange=(e,index)=>{
        this.state.inputs[index]=e.target.value;
        this.setState({
            inputs:this.state.inputs
        })
    }
    handleRemove=(index)=>{
        this.state.inputs.splice(index,1);
        this.setState({
            inputs:this.state.inputs
        })
    }
    render() {
        const {inputs}=this.state;
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
                                              <div  key={index}>
                                                  <AvField
                                                      onChange={(e)=>this.handleChange(e,index)}
                                                      value={item}
                                                      type="text"
                                                      name="text1"
                                                      placeholder="Qayerdan"
                                                      required
                                                  />
                                                  <button onClick={()=>this.handleRemove(index)}>X</button>
                                              </div>
                                           )
                                        })}
                                        <button onClick={()=>this.addInput()}  type="submit" className={"btn btn-warning"}>Add</button>
                                    </AvForm>
                                    <AvForm className={"col-md-6"}>
                                        <AvField

                                            type="text"
                                            name="tex2"
                                            label="Tushurish joyi:"
                                            placeholder="Qayerga"
                                            required
                                        />
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
                                                required
                                            />
                                            <AvField
                                                className={"px-2"}
                                                type="text"
                                                name="VolumeLoad"
                                                label="Hajmi:"
                                                required
                                            />
                                        </AvForm>
                                    </div>
                                </div>
                                <div className={'col-md-6 my-3 border-bottom'}>
                                    <h5>Passport rasmi</h5>
                                    <AvForm>
                                        <div className={'divpassportFoto mt-3'}>
                                            <i className="fas fa-camera"></i>
                                            <div>
                                                <h6>Rasm qo'shish</h6>
                                                <p>Bitta rasm 10mb<br/>Maksimum 4 ta rasm<br/>Format jpg,png</p>
                                            </div>
                                            <AvField
                                                className="texpassportFoto"
                                                type="file"
                                                name="passportPhotos"
                                                multiple
                                            />
                                        </div>
                                    </AvForm>
                                </div>
                                <div className={'col-md-6 my-3 '}>
                                    <h5>Haydovchilik guvohnomasi</h5>
                                    <AvForm className={'mt-3'}>
                                        <AvField
                                            type="text"
                                            name="HaydovchiGuvohnomasiSeria"
                                            placeholder="Seria va raqam"
                                            required
                                            className={'py-4'}
                                        />
                                    </AvForm>
                                </div>
                                <div className={'col-md-6 my-3 '}>
                                    <h5>Haydovchilik guvohnomasi rasmi</h5>
                                    <AvForm>
                                        <div className={'divpassportFoto mt-3'}>
                                            <i className="fas fa-camera"></i>
                                            <div>
                                                <h6>Rasm qo'shish</h6>
                                                <p>Bitta rasm 10mb<br/>Maksimum 4 ta rasm<br/>Format jpg,png</p>
                                            </div>
                                            <AvField
                                                className="texpassportFoto"
                                                type="file"
                                                name="passportPhotos"
                                                multiple
                                            />
                                        </div>
                                    </AvForm>
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