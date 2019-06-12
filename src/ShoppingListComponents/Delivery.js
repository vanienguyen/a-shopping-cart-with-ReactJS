import React from 'react';
import './Delivery.css';
import './Text.css';
import DeliveryHome from "./DeliveryComponents/DeliveryHome";

class Delivery extends React.Component {
    constructor(props) {
        super(props);

        this.homeClick = this.homeClick.bind(this);
        this.workClick = this.workClick.bind(this);
        this.collectClick = this.collectClick.bind(this);

        this.state = {tab: 1};
    }

    homeClick() {
        this.setState({tab: 1});
    }

    workClick() {
        this.setState({tab: 2});
    }

    collectClick() {
        this.setState({tab: 3});
    }

    render() {
        const tab = this.state.tab;
        const homeClass = ["DeliveryHome"];
        const workClass = ["DeliveryWork"];
        const collectClass = ["DeliveryCollect"];

        let inforRequired;

        if(tab === 1) {
            inforRequired = <DeliveryHome />;
            homeClass.push('active');

        } else if(tab === 2) {
            inforRequired = <p>Work tab is here!!</p>
            workClass.push('active');

        } else if(tab === 3) {
            inforRequired = <p>Collect tab is here!!</p>
            collectClass.push('active');

        }
        return (

            <div className="Delivery">
                <strong> DELIVER TO </strong>
                <br/>
                <br/>
                
                <div className="container">
                    <div className="row text">
                        <div className={homeClass.join(' ')} onClick={this.homeClick}>
                            Home
                        </div>

                        <div className={workClass.join(' ')} onClick={this.workClick}>
                            Work
                        </div>

                        <div className={collectClass.join(' ')} onClick={this.collectClick}>
                            Collect
                        </div>
                    </div>
                </div> <br/>
                {inforRequired}
            </div>
        )
    }
}

export default Delivery;