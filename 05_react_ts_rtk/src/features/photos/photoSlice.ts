import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Photo } from './types';

interface PhotoState {
  photos: Photo[];
  loading: boolean;
  error: string | null;
}

const initialState: PhotoState = {
  photos: [],
  loading: false,
  error: null
};

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async () => {
    const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    return (await response.json()) as Photo[];
  }
);

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch photos';
      });
  }
});

export default photoSlice.reducer;
