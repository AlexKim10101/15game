import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from './Field'


class App extends React.Component {
    render(){
        return(
            <div
                className = 'container'>
                    <Field />
                    
            </div>
        )
        
    }
}

export default App;
