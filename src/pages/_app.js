import 'styles/globals.css'
import { withRecoil, withTheme } from 'lib'
import compose from 'ramda.compose'

function withAppContainer(Component) {
    return function withAppContainerWrapper(props) {
        return (
            <div className="app-container">
                <Component {...props} />
            </div>
        )
    }
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default compose(withRecoil, withTheme({}), withAppContainer)(MyApp)
