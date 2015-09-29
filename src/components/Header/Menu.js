import React from 'react';
import { Link } from 'react-router';
import { loadFiles } from '../../utils/loader.js';

export default class Menu extends React.Component {
  render() {
    const items = loadFiles('pages');
    const res = items.map(item => {
      return (
          <li key={item}>
            <Link to={`/page/${item}`}> {item} </Link>
          </li>
        );
    });
    return (
      <ul>
        {res}
      </ul>
    );
  }
}
