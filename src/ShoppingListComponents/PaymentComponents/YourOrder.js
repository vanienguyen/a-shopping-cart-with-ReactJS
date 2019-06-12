import React from 'react';
import '../Payment.css';
import 'bootstrap/dist/css/bootstrap.css';
class YourOrder extends React.Component {
    render() {
        const numOfItems = 1;
        const priceOfOneItem = 1800;
        const discountRate = 0.5;
        const deliveryPrice = 30;

        let priceOfItems = numOfItems * priceOfOneItem * discountRate;
        let priceOfOrder = priceOfItems + deliveryPrice;

        return(
            <div className='yourOrder'>
                <div className='text'> Add voucher or gift card</div>

                <div className='inline-elements'>

                    <input type="text" className='normalBox voucherInput'/>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" class="normalBox applyButton">
                        APPLY
                    </button>
                </div> <br/>

                <div className="orderContainer">
                    <p className='text'> Your order </p>

                    <div className="order-price-container inline-elements">
                        <div className="order-price-left-side">
                            <p>{numOfItems} items</p>
                            <p> Delivery </p>
                            <p> Returns </p>
                            <p className='total-price'> Total </p>

                        </div>
                        <div className="order-price-right text">
                            <p> ${priceOfItems} </p>
                            <p> {deliveryPrice} </p>
                            <p> FREE FOR 30 DAYS </p>
                            <p className='total-price'> ${priceOfOrder} </p>
                        </div>
                    </div>
                </div>
                <br/>

            </div>
        )
    }
}

export default YourOrder;