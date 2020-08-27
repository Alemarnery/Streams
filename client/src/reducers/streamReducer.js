import _ from "lodash";
import {
  FECTH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FECTH_STREAMS,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FECTH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FECTH_STREAM:
      //agrega una llave dinamica
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
