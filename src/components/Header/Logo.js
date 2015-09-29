import styles from './styles.styl';
import React from 'react';
// import { IndexLink}  from 'react-router';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Logo extends React.Component {
  render() {
    return (
      <div styleName="logo">
        <h1>
          Just for fun
          <cite styleName="small">&copy;</cite>
        </h1>
        <span styleName="caption">
          powered by react, webpack & magic
          <span styleName="emoji">
            ✨
          </span>
        </span>
      </div>
    );
  }
}
