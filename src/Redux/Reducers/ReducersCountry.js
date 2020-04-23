import { GET_MULAI, GET_SUKSES, GET_GAGAL } from "../Actions/ActionCountry";

const initState = {
  data: [],
  error: null,
  isLoading: false,
};

const getCountry = (state = initState, action) => {
  switch (action.type) {
    case GET_MULAI:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUKSES:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_GAGAL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default getCountry;
