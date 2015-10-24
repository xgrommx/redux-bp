import styles from './styles.styl';
import CSSModules from 'react-css-modules';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@CSSModules(styles)
@connect(state => ({ posts: state.posts }))
export default class App extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func,
    posts: PropTypes.array
  }

  render() {
    const posts = this.props.posts.map(item => {
      return (
        <li key={item.id}>
          <a href={`https://reddit.com/${item.permalink}`}>
            {item.title}
          </a>
        </li>
      );
    });

    if (this.props.posts.length > 1) {
      return (
        <div styleName="wrapper">
          <ul>
            {posts}
          </ul>
        </div>
      );
    } else {
      return (
        <div styleName="wrapper">
          <ul>
            spinner ...
          </ul>
        </div>
      );
    }
  }
}