import { useMemo } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import RegisterSlice from "./RegisterSlice";
export var useRegisterActions;

export function withRegisterActions(Component) {
    return function WithRegisterActionsWrapper(props) {
        const actions = useRegisterActions();
        return <Component actions={actions} {...props} />;
    };
}

useRegisterActions = () => {
    const setRegister = useSetRecoilState(RegisterSlice);
    const resetSlice = useResetRecoilState(RegisterSlice);

    return useMemo(
        () => ({
            resetSlice,
            handleChange: (e) => {
                const { name, value } = e.target;
                setRegister((slice) => ({ ...slice, [name]: value }));
            },
            dumbChange: () => {
                setRegister((slice) => ({ ...slice, email: "test" }));
            },
        }),
        [resetSlice, setRegister]
    );
};
