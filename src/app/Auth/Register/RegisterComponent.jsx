import PropTypes from 'prop-types'

const propTypes = {
    submit: PropTypes.func.isRequired,
    registerState: PropTypes.object.isRequired,
}

export default function RegisterComponent({ submit, ...rest }) {
    try {
        return (
            <span>
                <pre>{JSON.stringify(rest)}</pre>
                <button onClick={submit}>Register</button>
            </span>
        )
    } catch (e) {
        console.error('RegisterComponent::render', e)
        return null
    }
}

RegisterComponent.propTypes = propTypes
