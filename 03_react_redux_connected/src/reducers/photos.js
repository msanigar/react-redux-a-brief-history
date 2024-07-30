import { FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        loading: false,
        data: action.photos,
        error: ''
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default photos;
