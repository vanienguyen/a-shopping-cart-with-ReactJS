import React from 'react';
import '../Payment.css';

class PlaceOrderButton extends React.Component {

    render() {
        const buttonName = this.props.buttonName;
        return (
            <button type="button" className='placeOrderButton'>
                <span className='text'> {buttonName} </span><br/>
                (You will receive 1 parcel)
            </button>
        )
    }
}

export default PlaceOrderButton;