import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DeliveryHome extends React.Component {

    render() {
        return (

            <div className="Home">
                <strong> NAME </strong> <br/>
                <div className="normalBox">
                    <div>
                        Vanie Nguyen
                    </div>
                </div>

                <br/>

                <strong> DELIVERY ADDRESS </strong> <br/>
                <p className='normalBox'>
                    21 King Street, Auckland, 2021
                </p>
                <br/>

                <strong> MOBILE NUMBER </strong>
                <p className="normalBox"> 0123456789 </p>
                <br/>

                <strong> PARCEL 1 - SENT BY HUSK </strong>
                <p className="normalBox">
                    <strong>By Fri 7th June </strong>
                    9am to 5pm
                    <br/>
                    if ordered today
                </p>
            </div>
        )
    }
}

export default DeliveryHome;