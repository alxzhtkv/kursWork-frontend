import React, { useState } from 'react';
import './style.css'
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/slices/user';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [status, setStatus] = useState<string>('')

    const navigate = useNavigate();
    const dispatch = useAppDispatch();


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
            if (response.ok) {
                setStatus('Авторизация успешна')
                dispatch(setUser(data.user))
                navigate("/main")
            } else {
                setStatus('Неверные учетные данные');
            }
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }

    };



    return (
        <div className='auth_container'>
            <div className='header'>
                <img src={require('../../img/cosmoLogo.png')} className='logo_image' />
                <p>Cosmotask</p>

            </div>
            <div className='auth_box'>
                <div className='authorization'>
                    <h1>Log In</h1>
                    {status == '' ? <p>Войдите в свою учетную запись,<br />чтобы присоединиться к решению задач!</p> :
                        <p>{status}</p>
                    }

                    <div className='auth_form'>
                        <label className='form_label'>
                            Email:<br />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
                        </label>
                        <label className='form_label'>
    
                            Password:   <br />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Your password"/>
                        </label>
                     
                     {/* <div className='login_bttn_wrap'> */}
                        <button className='login_bttn'  onClick={handleLogin}>Войти</button>
                        {/* </div> */}
                    </div>


                </div>
                <div className='illustration'>
                    <img src={require('./img/seminar.png')} />
                </div>
            </div>

            {/* <h1>Раскройте свой потенциал с помощью эффективного планирования времени!</h1>
            {status}
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
            <button onClick={handleLogin}>Войти</button> */}
        </div >
    )
}



export default LoginPage;