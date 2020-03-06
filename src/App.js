import React from 'react';
import './App.css';
import reducer from './reducer';
import * as actions from './constants';

const thing3 = reducer(actions.ACTION_THREE);
const thing1 = reducer(actions.ACTION_ONE);
const thing2 = reducer(actions.ACTION_TWO);

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>{"Thing 1 has " + thing1}</p>
                <p>{"Thing 2 has " + thing2}</p>
                <p>{"Thing 3 has " + thing3}</p>
            </header>
        </div>
    );
}

export default App;
