import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS
} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state;

    case FETCH_POSTS_SUCCESS:
      return action.posts.map(i => {
        return {
          ...i,
          rating: 0
        };
      });

    default:
      return state;
  }
};
