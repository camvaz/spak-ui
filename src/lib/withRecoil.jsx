import { useEffect } from "react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";

function WithDebugObserverWrapper() {
    const snapshot = useRecoilSnapshot();

    useEffect(() => {
        console.debug("The following atoms were modified:");
        for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
}

export default function withRecoil(Component) {
    return function withRecoilWrapper(props) {
        return (
            <RecoilRoot>
                <WithDebugObserverWrapper />
                <Component {...props} />
            </RecoilRoot>
        );
    };
};
