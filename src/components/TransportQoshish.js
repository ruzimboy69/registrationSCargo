import React, {Component} from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {BrowserRouter as Router, Link, Route, Switch,useHistory} from "react-router-dom";
import "./transportQoshish.css";


class TransportQoshish extends Component {
    state={
        isPritsep:false
    };
    Pritsep=()=>{
        this.setState({
            isPritsep:!this.state.isPritsep
        });
    };
    render() {
        const {isPritsep}=this.state;
        return (
            <div>
                <div className={'container rounded'} style={{backgroundColor:"#f6f1f1"}}>
                    <div className={'row my-5 border-bottom py-5 mx-4'}>
                        <div className={"col-md-12 my-3"}><Link to={"/Carrier/Transport"}>Orqaga</Link></div>
                        <div className={'col-md-6'}>
                            <h4>To'liq ma'lumot</h4>
                            <AvForm>
                                <AvField
                                    type="text"
                                    name="text1"
                                    placeholder="Transport rusumi"
                                    label="Transport rusumi"
                                    required
                                />
                                <AvField
                                    type="select"
                                    name="select1"
                                    placeholder="Transport turi"
                                    label="Transport turi:"
                                    required
                                >
                                    <option>Avtobus</option>
                                    <option>Avtobus lyuks</option>
                                    <option>Avtokran</option>
                                    <option>Benzovoz</option>
                                    <option>Bo'sh konteyner</option>
                                    <option>Mikroavtobus</option>
                                </AvField>
                                <AvField
                                    type="select"
                                    name="select2"
                                    label="Transport kategoriyasi:"
                                    placeholder="Transport kategoriyasi:"
                                    required
                                >
                                    <option>B</option>
                                    <option>C</option>
                                    <option>C1</option>
                                    <option>CE</option>
                                    <option>C1E</option>
                                    <option>D</option>
                                </AvField>
                                <AvField
                                    type="text"
                                    name="weightofLoad"
                                    placeholder="yuk og'irligi"
                                    label="Maksimal yuk og'irligi:"
                                />
                            </AvForm>
                        </div>
                        <div className={'col-md-6'}>
                            <h4>Texpassport rasmi</h4>
                            <AvForm >
                                <div className={'divpassportFoto'}>
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
                    <div className={'row border-bottom mx-4 my-5 pb-5'}>
                        <div className={'col-md-6'}>
                            <h4>Texnik ma'lumotlar</h4>
                            <AvForm>
                                <AvField
                                    type="text"
                                    name="dataTechnical"
                                    placeholder="Transport vositasi raqami"
                                    label="Transport vositasi raqami:"
                                    required
                                />
                                <AvField
                                    type="date"
                                    name="dateofComplete"
                                    placeholder="Tugash muddati"
                                    label="Harakat tugash muddati:"
                                    required
                                >
                                </AvField>
                            </AvForm>
                        </div>
                        <div className={'col-md-6'}>
                            <h4>Transport rasmi</h4>
                            <AvForm >
                                <div className={'divpassportFoto'}>
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
                    <div className={'row my-5 mx-4'}>
                        <div className={'col-md-6'}>
                            <h4>Pritsep</h4>
                            <form className={"my-3"}>
                                <div className="custom-control custom-switch">
                                    <input onChange={this.Pritsep} type="checkbox" className="custom-control-input" id="switch1" name="example"/>
                                    <label className="custom-control-label" htmlFor="switch1">Mavjud pritsep</label>
                                </div>
                            </form>
                            {isPritsep ?
                                <AvForm>
                                    <AvField
                                        type="text"
                                        name="numberPritsep"
                                        placeholder="Pritsep raqami"
                                        label="Pritsep raqami:"
                                        required
                                    />
                                    <AvField
                                        type="select"
                                        name="categoryPritsep"
                                        label="Pritsep kategoriyasi:"
                                        placeholder="Pritsep kategoriyasi:"
                                        required
                                    >
                                        <option>B</option>
                                        <option>C</option>
                                        <option>C1</option>
                                        <option>CE</option>
                                        <option>C1E</option>
                                        <option>D</option>
                                    </AvField>
                                    <AvField
                                        type="text"
                                        name="unladenWeight"
                                        placeholder="yuksiz vazn, t"
                                        label="Yuksiz vazn og'irligi:"
                                    />
                                </AvForm>
                                :
                                " "
                            }
                        </div>
                        {isPritsep
                        ?
                            <div className={'col-md-6'}>
                                <h4>Texpassport rasmi</h4>
                                <AvForm >
                                    <div className={'divpassportFoto'}>
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
                            :
                            " "
                        }
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-12 text-right'}>
                            <button type="submit" className={'px-3 py-2 btn text-white font-weight-bold btn-warning' }>Transport qo'shish</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransportQoshish;