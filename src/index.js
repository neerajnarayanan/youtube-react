import React, {
    Component
}
from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyA63pBaXOI0GlR1MFjFs4Y55XSfo3GLZ3Q';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('dq')
    }
    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });

        });
    }
    render() {
        const videoSearch=_.debounce((term)=>{this.videoSearch(term)},3000);
        return ( < div > < SearchBar onSearchTermChange={videoSearch} / >
            < VideoDetail video = {
                this.state.selectedVideo
            }
            />  < VideoList videos = {
                this.state.videos
            }
            onVideoSelect = {
                selectedVideo => this.setState({
                    selectedVideo
                })
            }
            /> < /div > );


    }
}
ReactDOM.render( < App / > , document.querySelector('.container'));
