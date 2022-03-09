import Register from 'app/Auth/Register';
import { useState } from 'react';

export default function RegisterPage() {
    const [isOn, setIsOn] = useState(true);
    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                click
            </button>
            {isOn && <Register />}
        </div>
    )
}