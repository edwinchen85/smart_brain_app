import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imageUrl} alt="" style={{maxWidth: "500px"}} width="100%" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
