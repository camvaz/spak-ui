import compose from 'ramda.compose'
import withRecoil from 'lib/withRecoil'
import withTheme from 'lib/withTheme'
import 'styles/globals.css'

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

export default compose(
  withRecoil, 
  withTheme({}), 
  withAppContainer
)(MyApp)