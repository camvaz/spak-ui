import { useRecoilValue } from 'recoil'

export default function connectSlice({ slice }) {
    return Component => props => {
        const state = useRecoilValue(slice)
        return <Component {...props} {...state} />
    }
}
