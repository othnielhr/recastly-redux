var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.
  //return object with type and payload
  return {
    type: 'CHANGE_VIDEO_LIST',
    videos: videos
  };
};

export default changeVideoList;
