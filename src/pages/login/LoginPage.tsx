import React, { useState } from 'react';
import './style.css'

function LoginPage(){

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        
    };
    


    return(
        <div>
            <h1>Авторизация</h1>
            <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    пароль:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
              
            </div>
        </div >
    )
}
    
