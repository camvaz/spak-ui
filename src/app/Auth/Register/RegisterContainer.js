import { withRegisterEffect } from "./hof";
import compose from "ramda.compose";
import RegisterComponent from "./RegisterComponent";
import RegisterController from "./RegisterController";
import withProps from "lib/withProps";
import { withRegisterActions } from "./RegisterActions";
import connectSlice from "lib/connectSlice";
import RegisterSlice from "./RegisterSlice";

export default compose(
    connectSlice({ slice: RegisterSlice }),
    withRegisterActions,
    withRegisterEffect,
    withProps(({ registerState }) => ({
        submit: () => {
            RegisterController.register(registerState);
        },
    }))
)(RegisterComponent);
