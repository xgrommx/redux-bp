import styles from './styles.styl';
import CSSModules from 'react-css-modules';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addEntity, removeEntity } from '../../actions';

@CSSModules(styles)
@connect(state => ({
  entities: state.entities
}), {
  addEntity,
  removeEntity
})
export default class App extends Component {
  static propTypes = {
    addEntity: PropTypes.func,
    entities: PropTypes.array,
    removeEntity: PropTypes.func
  }

  addEntity = () => {
    this.props.addEntity();
  }

  removeEntity = (id) => {
    this.props.removeEntity(id);
  }

  render() {
    const entities = this.props.entities.map(item => {
      return (
        <li key={item.id}>
          {item.id}
          <button onClick={() => this.removeEntity(item.id)}> X </button>
        </li>
        );
    });
    return (
      <div styleName="wrapper">
        <h2>Add entities</h2>
          <ul>
            {entities}
          </ul>
        <button onClick={this.addEntity}>Add entity</button>
      </div>
    );
  }
}