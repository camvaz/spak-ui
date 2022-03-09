import { useRegisterState } from "./hooks";
import PropTypes from "prop-types";

const propTypes = {
    submit: PropTypes.func.isRequired,
};

export default function RegisterComponent({ submit }) {
    const registerState = useRegisterState();

    return (
        <span>
            <pre>{JSON.stringify(registerState)}</pre>
            <button onClick={submit}>Register</button>
        </span>
    );
}

RegisterComponent.propTypes = propTypes;
