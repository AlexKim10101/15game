import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Squere from './Squere'
class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div
        className = 'wrapper'
        style = {{order: this.props.index}}
        onClick={this.props.onClick}
        >
            <Squere 
                value = {this.props.number}
                data-order = {this.props.index}
  
            />
        </div>



        )
    }
    
}

export default Card;