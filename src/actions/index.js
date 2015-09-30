import {
  ADD_ENTITY,
  REMOVE_ENTITY
} from '../constants';

function genId() {
  return Math.floor(Math.random() * 10000000000);
}

export function addEntity() {
  return {
    type: ADD_ENTITY,
    id: genId()
  };
}

export function removeEntity(id) {
  return {
    type: REMOVE_ENTITY,
    id
  };
}