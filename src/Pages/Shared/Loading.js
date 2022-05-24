import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-32 h-32 border-b-4 border-secondary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;