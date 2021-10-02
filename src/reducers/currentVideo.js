import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  /* eslint-disable indent */
  switch (action.type) {
    case 'CHANGE_VIDEO':
      if (action.video) {
        return action.video;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default currentVideoReducer;
