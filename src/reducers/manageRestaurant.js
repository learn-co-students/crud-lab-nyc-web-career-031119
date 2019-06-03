
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      // console.log("added", action);
      return { ...state, restaurants: [...state.restaurants, {text: action.text, id: cuid()}] };
    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    case "ADD_REVIEW":
      // console.log("added", action);
      return { ...state, reviews: [...state.reviews, {...action.review, id: cuid()}] };
    case "DELETE_REVIEW":
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
    default:
      return state
  }

}
