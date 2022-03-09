import { useEffect } from "react";

export default function withRegisterEffect(Component) {
    return function WithRegisterEffectWrapper(props) {
        useEffect(() => {
            return () => {
                props.actions.resetSlice();
            };
        }, [props.actions]);

        return <Component {...props} />;
    };
}
