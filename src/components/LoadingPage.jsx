import React from 'react';
import LoadingImage from "./loadingicon.png"

export const LoadingPage = () => {
    return (
    <div className='loading-page'>
        <img src={LoadingImage} alt="Loading" className="loading-icon" />
     </div>
      );
};
