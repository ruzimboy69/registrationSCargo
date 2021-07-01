import React, {Component} from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";

class FiltrParametr extends Component {
    render() {
        return (
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <p>Jo'natma sanasi</p>
                            <AvForm>
                               <div className={'d-flex justify-content-between'}>
                                   <AvField
                                       type="date"
                                       name="date"
                                       placeholder="sana"
                                       required
                                   />
                                   <AvField
                                       type="date"
                                       name="date"
                                       placeholder="sana"
                                       required
                                   />
                               </div>
                                <AvField
                                    type="text"
                                    name="text1"
                                    label="Yuklash joyi"
                                    placeholder="Qayerdan"
                                    required
                                />
                                <AvField
                                    type="text"
                                    name="tex2"
                                    label="Tushurish joyi"
                                    placeholder="Qayerga"
                                    required
                                />
                                <div className={'d-flex flex-wrap justify-content-between'}>
                                    <AvField
                                        label="Yuk ma'lumotlari ...dan"
                                        type="text"
                                        name="text3"
                                        placeholder="Vazn ...t dan"
                                        required
                                    />
                                    <AvField
                                        label={"...gacha"}
                                        type="text"
                                        name="text4"
                                        placeholder="Vazn ...t gacha"
                                        required
                                    />
                                    <AvField
                                        type="text"
                                        name="text5"
                                        placeholder="Hajm ...m3 dan"
                                        required
                                    />
                                    <AvField
                                        type="text"
                                        name="text6"
                                        placeholder="Hajm ...m3 gacha"
                                        required
                                    />
                                </div>
                                <AvField
                                    type="select"
                                    name="select"
                                    label="Transport turi"
                                    placeholder="Transport turi"
                                    required
                                >
                                <option>Avtobus</option>
                                <option>Avtobus lyuks</option>
                                <option>Avtokran</option>
                                <option>Benzovoz</option>
                                <option>Bo'sh konteyner</option>
                                <option>Mikroavtobus</option>
                            </AvField>
                                <button className={'btn btn-warning btn-block text-white font-weight-bold'}>Topshirmoq</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FiltrParametr;