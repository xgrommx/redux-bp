/* global require */
import styles from './styles.styl';
import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Article extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }
  render() {
    const post = require(`../../posts/${this.props.params.id}.md`);
    if (!this.props.params.id) {
      return null;
    } else {
      return (
        <div styleName="wrapper">
          <span dangerouslySetInnerHTML={{ __html: post }} />
        </div>
      );
    }
  }
}
