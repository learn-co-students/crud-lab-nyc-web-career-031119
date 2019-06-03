import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, onDelete } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => onDelete(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
