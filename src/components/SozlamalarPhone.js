import React, {Component} from 'react';

class SozlamalarPhone extends Component {
    render() {
        return (
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <div className={'card my-5'}>
                                <div className={"card-header bg-white"}>
                                    <h5>Joriy telefon raqamingiz</h5>
                                </div>
                                <div className={'card-body text-center'}>
                                    <div className={'d-flex text-center justify-content-center my-4'}>
                                        <div className={'py-2 px-3 bg-secondary mr-2 rounded text-white'}>+99891</div>
                                        <div className={'py-2 px-3 bg-secondary ml-2 rounded text-white'}>6465729</div>
                                    </div>
                                    <p>Telefon raqamingizni o'zgartirishni xohlaysizmi ?</p>

                                </div>
                            </div>
                            <div className={'text-right my-3'}>
                                <button className={'btn btn-warning py-2 px-5 text-white font-weight-bold'}>Raqamni o'zgartirish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SozlamalarPhone;