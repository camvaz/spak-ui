import { connectSlice, withActions, withProps } from 'lib'
import { useRegisterActions } from './RegisterActions'
import { withRegisterEffect } from './hof'
import compose from 'ramda.compose'
import RegisterComponent from './RegisterComponent'
import RegisterController from './RegisterController'
import RegisterSlice from './RegisterSlice'

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
