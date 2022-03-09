import { atom } from "recoil";

const registerSliceConfig = {
    key: "registerState",
    default: {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
    },
};
const RegisterSlice = atom(registerSliceConfig);

export const useRegisterState = () => useRecoilValue(RegisterSlice);
export default RegisterSlice;
