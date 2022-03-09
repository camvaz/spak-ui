import React from 'react';
import { RecoilRoot } from 'recoil';

export default function withRecoil(Component) {
    return function withRecoilWrapper(props) {
        return (
            <RecoilRoot>
                <Component {...props} />
            </RecoilRoot>
        );
    };
};
