import React, { Component } from 'react';

class VideoDetail extends Component {
    render () {
        if(!this.props.video) {
            return (<div>Loading...</div>);
        }
        
        let videoId = this.props.video.id.videoId;
        let url = `https://www.youtube.com/embed/${videoId}`;
        
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} type="text/html" frameBorder="0"></iframe>
                </div>
                <div className="details">
                    <div>{ this.props.video.snippet.title }</div>
                    <div>{ this.props.video.snippet.description }</div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;