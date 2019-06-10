import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    restId: this.props.restaurant.id,
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state)
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" placeholder="write your review..." value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" value="ADD REVIEW" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
