import React from 'react';

const messages = [
    "Fetching awesome deals...",
    "Loading your products...",
    "Almost there...",
    "Bringing the best for you...",
    "Hang tight, great stuff incoming!"
];

const LoadingSpinner = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    return (
        <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent mb-4"></div>
            <p className="text-pink-600 font-medium">{message}</p>
        </div>
    );
};

export default LoadingSpinner;
