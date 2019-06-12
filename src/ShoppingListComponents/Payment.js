import React from 'react';
import './Payment.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NormalCreditCards from "./PaymentComponents/NormalCreditCards";
import PayPal from "./PaymentComponents/PayPal";
import ApplePay from "./PaymentComponents/ApplePay";
import YourOrder from "./PaymentComponents/YourOrder";
import PlaceOrderButton from "./PaymentComponents/PlaceOrderButton";

class Payment extends React.Component {
    constructor(props) {
        super(props);

        this.normalCreditCardsClick = this.normalCreditCardsClick.bind(this);
        this.payPalClick = this.payPalClick.bind(this);
        this.applePayClick = this.applePayClick.bind(this);

        this.state = {paymentMethod: 1};
    }

    normalCreditCardsClick() {
        this.setState({paymentMethod: 1});
    }

    payPalClick() {
        this.setState({paymentMethod: 2});
    }

    applePayClick() {
        this.setState({paymentMethod: 3})
    }

    render () {
        const paymentMethod = this.state.paymentMethod;

        const normalCreditCardsClass = ['NormalCreditCards'];
        const payPalClass = ['PayPal'];
        const applePayClass = ['ApplePay'];

        let paymentInfoRequired;
        let buttonName;

        if(paymentMethod === 1) {
            paymentInfoRequired = <NormalCreditCards/>;
            normalCreditCardsClass.push('active');
            buttonName = 'Place your order';

        } else if(paymentMethod === 2) {
            paymentInfoRequired = <PayPal/>
            payPalClass.push('active');
            buttonName = 'Pay now with PayPal';

        } else if(paymentMethod === 3) {
            paymentInfoRequired = <ApplePay/>;
            applePayClass.push('active');
            buttonName = 'Pay now with ApplyPay';
        }

        return (
            <div className="Payment">
                <div className='text'>Pay by</div>
                <br/>
                <div className="PaymentMethodsInfo">
                    <div className="PaymentMethods">

                        <div className={normalCreditCardsClass.join(' ')} onClick={this.normalCreditCardsClick}>
                            <FontAwesomeIcon icon={['fab', 'cc-mastercard']} size='2x' className='normalIcon'/>
                            <FontAwesomeIcon icon={['fab', 'cc-visa']} size='2x' className='normalIcon'/>
                            <FontAwesomeIcon icon={['fab', 'cc-amex']} size='2x' className='normalIcon'/>
                        </div>

                        <div className={payPalClass.join(' ')} onClick={this.payPalClick}>
                            <FontAwesomeIcon icon={['fab', 'cc-paypal']} size='2x' className='normalIcon'/>
                        </div>

                        <div className={applePayClass.join(' ')} onClick={this.applePayClick}>
                            <FontAwesomeIcon icon={['fab', 'cc-apple-pay']} size='2x' className='normalIcon'/>
                        </div>
                    </div> <br/> <br/>

                    {paymentInfoRequired}

                </div>

                <YourOrder />

                <PlaceOrderButton buttonName={buttonName}/>

                <p className='terms-conditions'>
                    By clicking 'Place your order', you agree to the &nbsp;
                    <a href=''>
                        <strong>Terms & Conditions</strong>
                    </a>
                </p>
            </div>

        )
    }
}

export default Payment;