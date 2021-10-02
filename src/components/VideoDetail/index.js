import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSRC} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">The entirety: rebuilt in hooks.</h4>
          <p>
              Things refactored:<br/>
              1) Everything --> FCs w/ hooks.<br/>
              2) Tree cleaned; Nested dependent components inside parents. <br/>
              3) Minimized unnecessary componentization while preserving dynamism.<br/>
              4) Portals.<br/>
              5) CSS.
          </p>
          <p><a href="https://github.com/LivingMartialWay/TotalModalMadness" target="_blank" rel="noreferrer">Click here to view respository.</a></p>
      </div>
    </div>
  );
};

export default VideoDetail;
