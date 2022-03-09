export default function withActions(actionHook) {
    return Component => props => {
        const actions = actionHook()
        return <Component actions={actions} {...props} />
    }
}
