import React from 'react';
import { useAppSelector } from '../app/hooks';

const PhotoList: React.FC = () => {
  const photos = useAppSelector((state) => state.photos.photos);

  if (!photos || !Array.isArray(photos)) {
    return <p>No photos available</p>;
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
