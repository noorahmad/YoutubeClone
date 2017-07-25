import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyBoUQl4qB5ouihVT2egLOrFyGGVwVd0bdY"

class App extends Component {
  constructor(props) {
    super(props)

    //initialize an array to hold videos
    this.state={ videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //API call that gathers data from surfboards search term. videos = data
      this.setState({ videos })
      // this.setState({ videos: videos })
      // first videos from array, second one from api call
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
