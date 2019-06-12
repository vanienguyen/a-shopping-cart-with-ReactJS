import React from 'react';
import '../Icon.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ApplePay extends React.Component {
    render() {
        return(
            <div className='applePayWarning'>
                <FontAwesomeIcon icon='exclamation-circle' className='normalIcon'/>
                &nbsp; Apologies, ApplePay is only available for orders below $1,000.00 <br/> <br/>
                &nbsp; &nbsp; &nbsp; <a href='#'>Find out more</a>
            </div>
        )
    }
}

export default ApplePay;