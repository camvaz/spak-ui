import PropTypes from 'prop-types'

const propTypes = {
    submit: PropTypes.func.isRequired,
    registerState: PropTypes.object.isRequired,
}

export default function RegisterComponent({ submit, registerState }) {
    return (
        <span>
            <pre>{JSON.stringify(registerState)}</pre>
            <button onClick={submit}>Register</button>
        </span>
    )
}

RegisterComponent.propTypes = propTypes
