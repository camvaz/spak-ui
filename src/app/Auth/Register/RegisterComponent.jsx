import PropTypes from 'prop-types'
import { useRegisterState } from './hooks';

const propTypes = {
    submit: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
}

export default function RegisterComponent({ submit, actions }) {
    const registerState = useRegisterState();
    const onSubmit = () => submit(registerState);

    return (
        <span>
            <pre>{JSON.stringify(registerState)}</pre>
            <button onClick={actions.dumbChange}>Register</button>
        </span>
    )
}

RegisterComponent.propTypes = propTypes;