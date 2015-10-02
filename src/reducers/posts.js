import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS
} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state;

    case FETCH_POSTS_SUCCESS:
      return state.concat(action.posts);

    default:
      return state;
  }
};

