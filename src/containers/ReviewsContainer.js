import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: revInfo => dispatch({ type: "ADD_REVIEW", payload: revInfo }),
    deleteReview: revId => dispatch({ type: "DELETE_REVIEW", payload: revId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
