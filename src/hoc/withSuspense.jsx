import React from 'react';
import LoadingScreen from '../common/LoadingScreen';


export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<LoadingScreen />}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}
