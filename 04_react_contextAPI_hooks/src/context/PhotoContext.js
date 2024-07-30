import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
      .then(response => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <PhotoContext.Provider value={{ photos, loading, error }}>
      {children}
    </PhotoContext.Provider>
  );
};