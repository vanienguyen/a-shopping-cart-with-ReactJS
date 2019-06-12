import React from 'react';

class PayPal extends React.Component {

    render() {
        return (
            <div>
                You will be redirected to PayPal to complete your order. <br/> <br/>
                <div>
                    <input type='checkbox'/>
                    &nbsp; Remember for future PayPal purchases
                </div>
            </div>
        )
    }
}

export default PayPal;