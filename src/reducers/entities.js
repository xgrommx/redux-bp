import {
  ADD_ENTITY,
  REMOVE_ENTITY
} from '../constants';

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ENTITY:
      return state.concat(action);

    case REMOVE_ENTITY:
      return state.filter((i) => i.id !== action.id);

    default:
      return state;
  }
};

