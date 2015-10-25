import fetch from 'isomorphic-fetch';

import {
  FETCH_POSTS_SUCCESS
} from '../constants';

function receivePosts(reddit, json) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts: json.data.children.map(child => child.data)
  };
}

export function fetchPosts(reddit) {
  return dispatch => {
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then(res => res.json())
      .then(json => {
        dispatch(receivePosts(reddit, json));
      })
      .catch(err => new Error(err));
  };
}
