import { useEffect } from "react";
import { useRegisterActions } from "../RegisterActions";

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
