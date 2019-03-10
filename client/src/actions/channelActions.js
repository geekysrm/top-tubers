import axios from "axios";

import { GET_TOP_CHANNELS } from "./types";

export const getTopChannels = () => dispatch => {
  axios
    .post("/channels/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_TOP_CHANNELS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};
