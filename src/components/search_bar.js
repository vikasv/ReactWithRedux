import React, { Component } from 'react';
// const React.Component from 'react'

// const searchBar = () => {
//   return <input />;  // React.createElement // Functional Component
// }

// class based components => this component has some functionality which says that
// their is update on this component. Basically these help to communicate with
// other components

// Every class has render method
class SearchBar extends Component {
    render() {
      return <input />
    }
}

export default searchBar;
