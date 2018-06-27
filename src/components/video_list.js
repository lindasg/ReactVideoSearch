import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map(obj => {
          return (
            <VideoListItem
              onVideoSelect={this.props.onVideoSelect}
              key={obj.etag}
              video={obj} />
          )
        })}
      </ul>
    )
  }
}

export default VideoList;
