import React, { Component } from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
    render () {
    console.log(this);
        return (
            <ul className="col-md-4 list-group"> 
                { 
                    this.props.videos.map((video) => {
                        return <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />
                    })
                }
            </ul>
        );
    }
}

export default VideoList;