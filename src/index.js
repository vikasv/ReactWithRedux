import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Inputter from './components/inputter';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {myInputValue : 'vik'};
    }
    
    changeValue(inp){
        this.setState({myInputValue : inp});
    }
    
    render(){
        return(
                <div>
                    <p> {this.state.myInputValue} </p>
                    <Inputter onChangeElement = {myInputValue => this.changeValue(myInputValue)}/>
                </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
