import axios from "axios";

export const GET_MULAI = "GET_MULAI";
export const GET_SUKSES = "GET_SUKSES";
export const GET_GAGAL = "GET_GAGAL";

export const getDataBegin = () => {
  return {
    type: GET_MULAI,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GET_SUKSES,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GET_GAGAL,
    error,
  };
};

export const getCountry = () => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get("https://5e9ee7cefb467500166c49bb.mockapi.io/country")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};

export const postCountry = (obj) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .post("https://5e9ee7cefb467500166c49bb.mockapi.io/country", obj)
      .then(() => dispatch(getCountry()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};

export const deleteCountry = (id) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .delete(`https://5e9ee7cefb467500166c49bb.mockapi.io/country/${id}`)
      .then(() => dispatch(getCountry()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};
