import styles from './styles.styl';
import React from 'react';
import Logo from './Logo';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <div styleName="wrapper">
        </div>
      </div>
    );
  }
}
