import axios from "axios";

export const GET_DATA_MULAI = "GET_DATA_MULAI";
export const GET_DATA_SUKSES = "GET_DATA_SUKSES";
export const GET_DATA_GAGAL = "GET_DATA_GAGAL";

export const getDataBegin = () => {
  return {
    type: GET_DATA_MULAI,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GET_DATA_SUKSES,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GET_DATA_GAGAL,
    error,
  };
};

export const getAbout = () => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get("https://5e9ee7cefb467500166c49bb.mockapi.io/about")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};

export const postAbout = (obj) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .post("https://5e9ee7cefb467500166c49bb.mockapi.io/about", obj)
      .then(() => dispatch(getAbout()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};
