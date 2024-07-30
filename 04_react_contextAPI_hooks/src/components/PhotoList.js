import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';

const PhotoList = () => {
  const { photos, loading, error } = useContext(PhotoContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading photos: {error}</p>;
  }

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <img src={photo.urls.thumb} alt={photo.description} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;