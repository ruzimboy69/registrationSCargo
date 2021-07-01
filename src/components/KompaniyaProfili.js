import React from 'react';
import {AvField, AvForm} from "availity-reactstrap-validation";

function KompaniyaProfili(props) {
    return (
        <div>
            <div className={'container'}>
                <div className={'row '}>
                    <div className={'col-md-12'}>
                        <div className={'card border-0'}>
                            <div className={"card-body d-flex justify-content-between flex-wrap px-0 shadow-lg"}>
                                <div className={'col-md-12 border-bottom'}>
                                    <h5>Batafsil ma'lumotlar</h5>
                                </div>
                                <div className={'col-md-12 my-3 border-bottom'}>
                                    <AvForm className={'col-md-6'}>
                                        <AvField
                                            type="text"
                                            name="KompaniyaNomi"
                                            placeholder="Kompaniya Nomi"
                                            required
                                            className={'py-4'}
                                        />
                                        <AvField
                                            type="select"
                                            name="KompaniyaHududi"
                                            placeholder="Kompaniya joylashgan hudud"
                                            required
                                        >
                                            <option>Andijon</option>
                                            <option>Buxoro</option>
                                            <option>Samarqand</option>
                                            <option>Toshkent</option>
                                            <option>Qashqadaryo</option>
                                            <option>Surxondaryo</option>
                                            <option>Navoiy</option>
                                            <option>Jizzax</option>
                                            <option>Sirdaryo</option>
                                            <option>Namangan</option>
                                            <option>Farg'ona</option>
                                            <option>Qoraqalpog'iston</option>
                                            <option>Xorazm</option>
                                        </AvField>
                                        <AvField
                                            type="select"
                                            name="KompaniyaTuri"
                                            placeholder="Kompaniya turi"
                                            required
                                        >
                                            <option>IT Kompaniya</option>
                                            <option>Yuk tashuvchi</option>
                                            <option>Ekspeditor</option>
                                            <option>Yuk jo'natuvchi</option>
                                            <option>Dispetcher</option>
                                            <option>Ekspeditor/Yuk tashuvchi</option>
                                            <option>Yuk jo'natuvchi/Yuk tashuvchi</option>
                                            <option>Sug'urta kompaniya</option>
                                            <option>Avtoulovlarga xizmat ko'rsatish</option>
                                        </AvField>

                                    </AvForm>
                                </div>
                                <div className={'col-md-6 my-3 px-3 '}>
                                    <h5>Ta'rif rejasi</h5>
                                    <p className={'my-4'}>"Asosiy" tarif rejasi tugadi. Yuklarni yangilash o'chirilgan</p>
                                    <button className={'btn btn-warning text-white font-weight-bold px-3 py-2'}>To'lovga o'tish</button>
                                </div>
                            </div>
                        </div>
                        <div className={'text-right my-3'}>
                            <button className={'btn btn-warning py-2 px-5 text-white font-weight-bold'}>Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KompaniyaProfili;