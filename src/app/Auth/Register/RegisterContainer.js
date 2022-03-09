import { withRegisterActions } from "./RegisterActions";
import { withRegisterEffect } from "./hof";
import RegisterComponent from "./RegisterComponent";
import RegisterController from "./RegisterController";
import RegisterSlice from "./RegisterSlice";
import compose from "ramda.compose";
import connectSlice from "lib/connectSlice";
import withProps from "lib/withProps";

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
