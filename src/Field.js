import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Card from './Card'


class Field extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            arr : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].sort(function(){
                return Math.random() - 0.5;
            })
        }
        this.handleClick = this.handleClick.bind(this);
    }

    

    render(){
        handleClick(i){
            const arr = this.state.arr.slice();
            arr[i]++;
            this.setState({
                arr:arr
            })
        }
        return(
            this.state.arr.map(function (number,index) {
                return(
                    <Card 
                        number = {number}
                        index = {index}
                        onClick={i => this.handleClick(i)}/>
                )
            })
        )
    }

}



export default Field;