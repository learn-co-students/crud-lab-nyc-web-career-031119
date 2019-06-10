import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  filterReviews = () => {
    return this.props.reviews.filter(rev => {
      return rev.restaurantId === this.props.restaurant.id
    });
  }

  renderReviews = () => {
    const filteredReviews = this.filterReviews();
    return filteredReviews.map(rev => {
      return <Review key={rev.restaurantId} review={rev} deleteReview={this.props.deleteReview}/>
    });
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
