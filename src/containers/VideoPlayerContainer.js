import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeVideo: (video) => dispatch(changeVideo(video))
//   };
// };

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
