import React from 'react';
import './Headers.css';
import './Text.css';
import './Icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Headers() {
    return (

        <div className="row headers">
            <div className="bag-header col text">
                <FontAwesomeIcon icon="shopping-bag" className="normalIcon"/>
                &nbsp; Bag
            </div>

            <div className="DeliveryHeader col text">
                <FontAwesomeIcon icon="truck" className="normalIcon"/>
                &nbsp; Delivery
            </div>

            <div className="PaymentHeader col text">
                <FontAwesomeIcon icon="credit-card" className="normalIcon"/>
                &nbsp; Payment
            </div>
        </div>
    )
}

export default Headers;