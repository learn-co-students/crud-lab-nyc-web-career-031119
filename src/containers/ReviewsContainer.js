import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  filterReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id);


  render() {
    // console.log("reviews are:", this.props.reviews);
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.filterReviews()} onDelete={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({ type: "ADD_REVIEW", review: {text, restaurantId} }),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect((state) => ({reviews: state.reviews}), mapDispatchToProps)(ReviewsContainer)
