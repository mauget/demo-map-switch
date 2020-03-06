import React from 'react';
import './App.css';
import reducer from './reducer';
import * as actions from './constants';

const thing3 = reducer(actions.ACTION_THREE, '3');
const thing1 = reducer(actions.ACTION_ONE, '1');
const thing2 = reducer(actions.ACTION_TWO, '2');
const thingX = reducer('X', null);

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>{`Thing 1 :: {${thing1}}`}</p>
                <p>{`Thing 2 :: {${thing2}}`}</p>
                <p>{`Thing 3 :: {${thing3}}`}</p>
                <p>{`Thing X :: {${thingX}}`}</p>
            </header>
        </div>
    );
}

export default App;
