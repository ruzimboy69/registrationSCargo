import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";

class MenejerQoshish extends Component {
    render() {
        return (
            <div className={'container'}>
               <div className={'row my-5 ml-5'}>
                   <div className={'col-md-12'}>
                       <div className={'card pb-4'}>
                           <div className={'card-header'}>
                               <h3>To'liq ma'lumotlar</h3>
                           </div>

                               <AvForm className={'card-body d-flex flex-wrap justify-content-between'}>
                                       <AvField
                                           type="text"
                                           placeholder="Ismi"
                                           name="MenejerIsmi"
                                           style={{width:"500px"}}
                                           className={'py-4 mt-3'}
                                       />
                                   <AvField
                                       type="text"
                                       placeholder="Familiyasi"
                                       name="MenejerFamiliyasi"
                                       style={{width:"500px"}}
                                       className={'py-4 mt-3'}
                                   />
                                   <AvField
                                       type="text"
                                       placeholder="Telefon nomer"
                                       name="numberPhone"
                                       style={{width:"500px"}}
                                       className={'py-4 mt-3'}
                                   />
                                   <AvField
                                       type="text"
                                       placeholder="Foydalanuvchining telegramdagi nomi"
                                       name="userNameInTelegram"
                                       style={{width:"500px"}}
                                       className={'py-4 mt-3'}
                                   />
                               </AvForm>
                           <div className={'px-4'}>
                               <p>Menejerning darajasini belgilang</p>
                               <button className={'btn btn-primary py-2 px-5 mr-3 '}>1-daraja</button>
                               <button className={'btn btn-primary py-2 px-5 mr-3'}>2-daraja</button>
                           </div>
                       </div>
                       <div className={'text-right my-3'}>
                           <button className={'btn btn-warning p-2 text-white font-weight-bold'}>Menejer qo'shish</button>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default MenejerQoshish;