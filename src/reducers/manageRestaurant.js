
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  console.log("action: ", action.type);
  switch(action.type) {
    case 'ADD_RESTAURANT':

      const rest = {
        id: cuid(),
        text: action.payload
      }
      return { ...state, restaurants: state.restaurants.concat(rest) }
    case 'DELETE_RESTAURANT':

      return { ...state, restaurants: state.restaurants.filter(rest => rest.id !== action.payload) }
    case 'ADD_REVIEW':

      const rev = {
        restaurantId: action.payload.restId,
        text: action.payload.text
      }
      return {...state, reviews: state.reviews.concat(rev)}

    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(rev => rev.id !== action.payload)}
    default:
      return state;
  }
}
