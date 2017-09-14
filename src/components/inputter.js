import React, {Component} from 'react';

class Inputter extends Component {
    constructor(props){
        super(props);
        
        this.state = {inputText : 'vikas'};
    }
    
    render(){
        return (
            <input className = "inputBorder"
            value = {this.state.inputText}
            onChange = {(event) => this.valueChange(event.target.value)} />      
        );
    };

    valueChange(inp) {
        this.setState({inputText : inp});
        this.props.onChangeElement(inp);
    }
};

export default Inputter;