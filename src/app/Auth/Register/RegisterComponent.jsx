import { useRegisterState } from './RegisterSlice'

export default function RegisterComponent() {
    const registerState = useRegisterState();

    return (
        <span>
            <pre>{JSON.stringify(registerState)}</pre>
        </span>
    )
}