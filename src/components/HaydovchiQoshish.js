import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";

class HaydovchiQoshish extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'row my-5 ml-5'}>
                    <div className={'col-md-12'}>
                        <div className={'card border-0'}>
                            <div className={"card-body d-flex justify-content-between flex-wrap px-0 shadow-lg"}>
                                <div className={'col-md-12 border-bottom'}>
                                    <h5>Batafsil ma'lumotlar</h5>
                                </div>
                                <div className={'col-md-6 my-3 border-bottom'}>
                                    <AvForm>
                                        <AvField
                                            type="text"
                                            name="HaydovchiIsmi"
                                            placeholder="Ismi"
                                            required
                                            className={'py-4'}
                                        />
                                        <AvField
                                            type="text"
                                            name="HaydovchiTelRaqami"
                                            placeholder="Telefon raqami"
                                            required
                                            className={'py-4'}
                                        >
                                        </AvField>
                                    </AvForm>
                                </div>
                                <div className={'col-md-6 my-3 border-bottom'}>
                                    <AvForm>
                                        <AvField
                                            type="text"
                                            name="HaydovchiFamiliyasi"
                                            placeholder="Familiyasi"
                                            required
                                            className={'py-4'}
                                        />
                                        <AvField
                                            type="text"
                                            name="TelegramUserName"
                                            placeholder="Foydalanuvchining telegramdagi ismi.Masalan @scargoslogistic"
                                            required
                                            className={'py-4'}
                                        >
                                        </AvField>
                                    </AvForm>
                                </div>
                                <div className={'col-md-6 my-3 border-bottom'}>
                                    <h5>Passport ma'lumotlari</h5>
                                    <AvForm className={'mt-3'}>
                                       <div className={'d-flex justify-content-between'}>
                                           <AvField
                                               type="text"
                                               name="PassportSeriyasi"
                                               placeholder="Seria"
                                               required
                                               className={'py-4'}
                                           />
                                           <AvField
                                               type="text"
                                               name="PassportNumber"
                                               placeholder="Raqam"
                                               required
                                               className={'py-4'}
                                           />
                                       </div>
                                            <AvField
                                                type="text"
                                                name="PassportBerilganJoy"
                                                placeholder="Kim tomonidan berilgan"
                                                required
                                                className={'py-4'}
                                            />
                                                <AvField
                                                    type="date"
                                                    name="PassportGivenTime"
                                                    placeholder="Qachon berilgan"
                                                    required
                                                    className={'py-4'}
                                                />
                                    </AvForm>
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

export default HaydovchiQoshish;