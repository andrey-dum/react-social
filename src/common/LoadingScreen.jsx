import React from 'react';
import logo from '../logo.png';

const LoadingScreen = () => {
    return (
        <div className="loadingScreen"><div><img src={logo} alt='Loading' /></div><h1>LOADING</h1></div>
    )
}

export default LoadingScreen;