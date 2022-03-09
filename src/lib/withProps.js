import mapProps from './mapProps'
import setDisplayName from './setDisplayName'
import wrapDisplayName from './wrapDisplayName'

const withProps = input => {
    const hoc = mapProps(props => ({
        ...props,
        ...(typeof input === 'function' ? input(props) : input),
    }))
    if (process.env.NODE_ENV !== 'production') {
        return BaseComponent =>
            setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(
                hoc(BaseComponent),
            )
    }
    return hoc
}

export default withProps
