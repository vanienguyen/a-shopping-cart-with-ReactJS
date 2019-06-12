import React from 'react';
import './Bag.css';
import './Text.css';
import './Icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Bag() {
    return (
        <div className="bag-container">
            <div className="bag-title text">
                <FontAwesomeIcon icon="box-open" className="normalIcon" />
                &nbsp; Parcel - sent by Vanie
            </div>
            <br/>

            <div className="inline-elements">
                <div className="product-image" >
                    <img class="img-fluid" src={require('./Coat.jpg')}
                         alt="A coat pic is here!!"/>
                </div>

                <div className="product-info">
                    <strong> Vanie </strong> <br/>
                    A ridiculously expensive coat from the Moon <br/>
                    <text className="original-price">NZD$1800 </text>
                    <text className="sale-price" >NZD$900</text> <br/>
                    <text style={{color: "red"}}>SALE</text> <br/> <br/>

                    <FontAwesomeIcon icon="heart" className="normalIcon" />&nbsp;
                    <strong> Move to wishlist </strong>  <br/>

                    <FontAwesomeIcon icon="trash-alt" className="normalIcon" />&nbsp;
                    <strong> Remove </strong> <br/> <br/>

                    <div className="quantity-size-container inline-elements">
                        <div className='selections-container'>
                            <strong> Qty </strong> <br/>
                            <select className="selections" >
                                <option value="0"> 0 </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        <div className='selections-container'>
                            <strong> Size </strong> <br/>
                            <select className="selections">
                                <option value="AU6">AU 6</option>
                                <option value="AU8">AU 8</option>
                                <option value="AU10">AU 10</option>
                                <option value="AU12">AU 12</option>

                            </select>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
}

export default Bag;
