import React from 'react';
import NavBar from './ShoppingListComponents/NavBar.js';
import './App.css';
import Content from "./ShoppingListComponents/Content";
import Headers from "./ShoppingListComponents/Headers";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab);

function App() {
    return (
        <body className="App">
            <NavBar />
            <div className="container-fluid">
                <Headers/>
                <Content/>
            </div>
        </body>
    );
}

export default App;
