import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={text: ""};

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({text: ""});
  }

  handleOnChange = (event) => this.setState({text: event.target.value});

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }


};

export default ReviewInput;
