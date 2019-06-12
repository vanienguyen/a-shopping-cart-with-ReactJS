import React from 'react';
import "./Content.css"
import Bag from "./Bag";
import Delivery from "./Delivery";
import Payment from "./Payment";

function Content() {
    return (
        <div id="Content" className="row">
            <div className="col-xl-4" > <Bag /> </div>
            <div className="col-xl-4" > <Delivery /> </div>
            <div className="col-xl-4" > <Payment /> </div>
        </div>
    )
}

export default Content;