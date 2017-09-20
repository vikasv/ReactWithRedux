import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail"
const API_KEY = "AIzaSyDZIwwCc52fhnbmNFMi8_X035RNA2u5K5w";

// create a new component which should produce html content
class App extends Component{
  constructor(props){
      super(props);

      this.state = { videos : [],
                     selectedVideo : null,
                     placeholder:'Search for something...'
                   };

      this.videoSearch('reactJS');
  }

  videoSearch(term) {
        YTSearch ({key : API_KEY, term: term}, (videos) => {
        this.setState({ videos : videos ,
                       selectedVideo : videos[0]
                      });
        console.log(this.state.videos);
        //this.setState({videos:videos}) only works when key and values are same
      })
  }
    
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
      
    return (
      <div>
      <SearchBar placeholder = {this.state.placeholder} onSearchTermChange = {videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  };
}

// const App = () => {
//   return (<div>
//       <SearchBar />
//   </div>);
// }

// take this content and keep it up on page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
