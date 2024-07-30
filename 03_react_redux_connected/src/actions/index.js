import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const fetchPhotosRequest = () => ({
  type: FETCH_PHOTOS_REQUEST
});

export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos
});

export const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  error
});

export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());
    axios.get(`https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
      .then(response => {
        dispatch(fetchPhotosSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPhotosFailure(error.message));
      });
  };
};
