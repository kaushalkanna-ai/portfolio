import React from 'react';

const LoadingScreen = ({ message = 'Initializing...' }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="loader-core"></div>
            <p className="loading-text font-mono">
                {message}
            </p>
        </div>
    );
};

export default LoadingScreen;
