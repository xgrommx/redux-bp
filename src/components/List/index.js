import styles from './styles.styl';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { loadFiles } from '../../utils/loader.js';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class List extends Component {
  render() {
    const posts = loadFiles('posts');
    const res = posts.map(post => {
      const date = post.slice(0,10);
      const publishedOn = date.slice(5).replace(/-/g, '/');
      const title = post.slice(11).replace(/-/g, ' ');
      return (
        <li key={post}>
          <Link to={`/article/${post}`}> {title}</Link>
          <small>&nbsp; published on {publishedOn}</small>
        </li>
        );
    });
    return (
      <div styleName="wrapper">
        <h2> Recent posts:</h2>
        <ul styleName="posts">
          {res}
        </ul>
      </div>
    );
  }
}