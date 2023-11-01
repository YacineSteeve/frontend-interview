import type { FunctionComponent } from 'react';

const AppLoading: FunctionComponent = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
            <div className="relative h-5 aspect-square animate-spin">
                <span className="absolute top-1/2 left-1/2 h-5 aspect-square bg-red-500 rounded-full animate-bounce-tl"></span>
                <span className="absolute top-1/2 right-1/2 h-5 aspect-square bg-red-500 rounded-full animate-bounce-tr"></span>
                <span className="absolute bottom-1/2 left-1/2 h-5 aspect-square bg-red-500 rounded-full animate-bounce-bl"></span>
                <span className="absolute bottom-1/2 right-1/2 h-5 aspect-square bg-red-500 rounded-full animate-bounce-br"></span>
            </div>
        </div>
    );
};

export default AppLoading;
