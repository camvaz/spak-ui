import { useRegisterActions } from './RegisterActions'
import { withRegisterEffect } from './hof'
import compose from 'ramda.compose'
import connectSlice from 'lib/connectSlice'
import RegisterComponent from './RegisterComponent'
import RegisterController from './RegisterController'
import RegisterSlice from './RegisterSlice'
import withActions from 'lib/withActions'
import withProps from 'lib/withProps'

export default compose(
    connectSlice({ slice: RegisterSlice }),
    withActions(() => useRegisterActions()),
    withRegisterEffect,
    withProps(({ registerState }) => ({
        submit: () => {
            RegisterController.register(registerState)
        },
    })),
)(RegisterComponent)
