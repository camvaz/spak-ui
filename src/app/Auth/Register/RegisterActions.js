import { useRecoilState, useResetRecoilState } from 'recoil';
import RegisterController from './RegisterController';
import RegisterSlice from './RegisterSlice';

export const useRegisterActions = () => {
    const [registerState, setRegister] = useRecoilState(RegisterSlice);
    const resetSlice = useResetRecoilState(RegisterSlice);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    }

    const submit = () => {
        try {
            RegisterController.register(registerState)
        } catch (error) {
            console.error('RegisterController::register', error);
        }
    }
    
    return { registerState, handleChange, resetSlice, submit };
}