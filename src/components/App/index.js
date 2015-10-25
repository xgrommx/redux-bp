import styles from './styles.styl';
import CSSModules from 'react-css-modules';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Post from '../Post';

@CSSModules(styles)
@connect(state => ({ posts: state.posts }))
export default class App extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func,
    posts: PropTypes.array
  }

  upvote = id => {
    let posts = this.props.posts;
    let p = _.find(posts, post => post.id === id);
    // this is a dirty-dirty hack. you kids should never ever do like this
    p.rating = p.rating + 1; // eslint-disable-line
    this.forceUpdate();
  }

  render() {
    return (
      <div styleName="wrapper">
        <ul>
          {
            this.props.posts
            .sort((a,b) => b.rating - a.rating)
            .map(item => {
              return (
                <Post
                  key={item.id}
                  post={item}
                  upvote={this.upvote}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}