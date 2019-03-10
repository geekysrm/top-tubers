import { GET_TOP_CHANNELS } from "../actions/types";

const initialState = {
  all: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_CHANNELS:
      return {
        all: action.payload.channels
      };
    default:
      return state;
  }
}
