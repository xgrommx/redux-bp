import React, { PropTypes } from 'react';

export default class Post extends React.Component {
  static propTypes = {
    post: PropTypes.object,
    upvote: PropTypes.func
  }

  render() {
    const { upvote, post: { id, title, permalink, rating } } = this.props;
    return (
      <li>
        <strong>{rating} </strong>
        <a href={`https://reddit.com/${permalink}`}>
          {title}
        </a>
        <span onClick={() => upvote(id)}> [UPVOTE] </span>
      </li>
    );
  }
}
