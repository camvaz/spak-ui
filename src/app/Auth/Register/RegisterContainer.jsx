import { useResetOnUnmount } from './hooks';
import RegisterComponent from './RegisterComponent';

export default function RegisterContainer() {
    try {
        useResetOnUnmount();
        return (
            <RegisterComponent />
        )
    } catch (error) {
        console.error("RegisterContainer::render", error); 
        return null;
    }
}