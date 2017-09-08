import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDZIwwCc52fhnbmNFMi8_X035RNA2u5K5w";
// create a new component which should produce html content
const App = () => {
  return (<div>
      <SearchBar />
  </div>);
}

// take this content and keep it up on page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
