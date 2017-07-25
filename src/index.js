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
    this.state={
      videos: [],
      selectedVideo:null
    }

    this.videoSearch('react js')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //API call that gathers data from surfboards search term. videos = data
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
