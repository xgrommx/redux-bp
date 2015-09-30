import styles from './styles.styl';
import React from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Logo extends React.Component {
  render() {
    return (
      <div styleName="logo">
        <span styleName="title">
         le Rèdùx Boìlerplatè
        </span>
        <span styleName="emoji">
          ✨
        </span>
      </div>
    );
  }
}
