import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAD6mJp0fz8vUPx1beF7tYsHK6e4d3g-Ig';

class App extends Component {
    constructor(props){
        super(props);

        this.state =  {
            videos: [],
            selectedVideo: null,
        };

        YTSearch({key: API_KEY, term: 'Pearl Jam'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})} 
                    videos={this.state.videos} />
            </div>
            );
        }
}
//Take this component's generated html 
//and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
