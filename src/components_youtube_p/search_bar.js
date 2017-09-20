import React, { Component } from 'react';
// const React.Component from 'react'

// const searchBar = () => {
//   return <input />;  // React.createElement // Functional Component
// }

// class based components => this component has some functionality which says that
// their is update on this component. Basically these help to communicate with
// other components


// state is plain javascript object that reacts to user inputs
// Each class based component has state object
// Every class has render method
class searchBar extends Component {
    // All javascript classes has special fucntion called constructor
    // this.setState need to updated when changing input
    constructor(props){
      super(props);

      this.state = {term : ''};
    }

    render() {
      // return <input onChange = {this.onInputChange} />
      // return <input onChange = {(event) => console.log(event.target.value)} />;
      // when ever we use javascript variable inside of JSX we use {}
      // when setState is called the component re-renders again
      // controlled components
      return (
      <div className="search-bar">
          <input
          value = {this.state.term}
          placeholder = {this.props.placeholder}
          onChange = {(event) => this.onInputChange(event.target.value)} />
      </div>
      );
    }
    // find more on react docs

    // onInputChange(event) {
    //   console.log(event.target.value);
    // }
    
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term); 
    }
}

export default searchBar;
