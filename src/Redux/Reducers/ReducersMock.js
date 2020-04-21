import {
  GET_DATA_MULAI,
  GET_DATA_SUKSES,
  GET_DATA_GAGAL,
} from "../Actions/ActionMock";

const initState = {
  data: [],
  error: null,
  isLoading: false,
};

const getAbout = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA_MULAI:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUKSES:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_DATA_GAGAL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default getAbout;
