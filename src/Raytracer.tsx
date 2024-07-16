import { ChangeEvent, useState } from 'react';

// import { Image } from './lib/Image';

import './App.css';

export function Raytracer() {
  const [imageHeight, setImageHeight] = useState<number>();
  const [imageWidth, setImageWidth] = useState<number>();
  // const [image, setImage] = useState<Image>();

  return <div className='card'>
    <div className='container'>
      <div className='row justify-content-center'>
        <input
          className='column'
          onChange={({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>): void => setImageHeight(Number(value))}
          placeholder='Set Canvas Height...'
          value={imageHeight || ''}
        />
        <input
          className='column'
          onChange={({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>): void => setImageWidth(Number(value))}
          placeholder='Set Canvas Width...'
          value={imageWidth || ''}
        />
      </div>
      <div className='row'>
        <canvas
          height={imageHeight}
          width={imageWidth}
        >
          The 3D renderer scene
        </canvas>
      </div>
    </div>
  </div>;
}
