import React from 'react';
import '../Payment.css';

class NormalCreditCards extends React.Component {

    render () {
        return (
            <div>
                <div className='text'> Card number </div>
                <input type="text" placeholder="e.g. 1234 5678 9123 4567" className='normalBox'/>
                <br/> <br/>

                <form className='inline-elements'>
                    <div className='expiryDateContainer'>
                        <div className='text'> Expiry date (mm/yy) </div>
                        <input type="text" placeholder="MM/YY" className='expiryDate'/>
                    </div>

                    <div className='cvcContainer'>
                        <div className='text'> Cvc </div>
                        <input type="text" placeholder="CVC" className='cvc'/>
                    </div>
                </form> <br/>

                <div>
                    <input type="checkbox"/>
                    &nbsp; Remember for future purchases
                </div> <br/>

            </div>
        )
    }
}

export default NormalCreditCards;