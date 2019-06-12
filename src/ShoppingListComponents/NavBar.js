import React from 'react';
import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
    return (
        <div id="NavBar">
            <div className="continue-shopping">
                <FontAwesomeIcon icon='long-arrow-alt-left' />
                &nbsp;
                <a><strong> Continue Shopping </strong></a>
            </div>

            <div className="brand text">
                <a>The Iconic</a>
            </div>

            <div className="FQAs">
                <FontAwesomeIcon icon='question-circle' />
                &nbsp;
                <a><strong>Contact & FAQs</strong></a>
            </div>
        </div>
    );
}

export default NavBar;
