import React, {Component} from 'react';
import {AvForm,AvField} from 'availity-reactstrap-validation';
class Bildirishnomalar extends Component {
    render() {
        return (
            <div>
                <div className={'container'}>
                    <div className={'row my-4'}>
                        <div className={'col-md-12'}>
                            <p className={'pb-4'}>Filtr bilan yangi buyurtmalar to'g'risida xabar bering:</p>
                            <AvForm>
                                <AvField   type="checkbox" name="avFieldCheckbox" label="SMS xabarnomalarini oling" required />
                                <AvField   type="checkbox" name="avFieldCheckbox" label="Elektron pochta xabarnomalarini oling" required />
                                <AvField   type="checkbox" name="avFieldCheckbox" label="Bildirishnomalarni o'chirib qo'yish" required />
                                 <button className={'btn btn-block text-white bg-warning'}>Saqlash</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bildirishnomalar;