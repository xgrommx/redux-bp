import '../styles/index.styl';

import React, { PropTypes } from 'react';
import Header from './Header';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
