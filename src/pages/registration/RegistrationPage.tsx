import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

interface RegistrationPageProps { }

function generateRandomString(length: number): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [status, setStatus] = useState<string>('')

    const navigate = useNavigate();

    const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPosition(e.target.value);
    }

    const generateRandomLogin = () => {
        const generatedLogin = generateRandomString(8);
        setLogin(generatedLogin);
    }

    const generateRandomPassword = () => {
        const generatedPassword = generateRandomString(12);
        setPassword(generatedPassword);
    }

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:8000/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, lastName, firstName, position }),
            });

            const data = await response.json();
            console.log(data);
            if(data.message){
                setStatus('Пользователь уже существует')
            }
            else{
                setStatus('Пользователь успешно зарегистирован!')
            }
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <div>
            <h1>Регистрация</h1>
            {status}
            <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Фамилия:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                <label>
                    Имя:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    Должность:
                    <select value={position} onChange={handlePositionChange}>
                        <option value="разработчик">Разработчик</option>
                        <option value="тестировщик">Тестировщик</option>
                        <option value="дизайнер">Дизайнер</option>
                        <option value="менеджер">Менеджер</option>
                    </select>
                </label>
                <br />
                
                <br />   <label>
                    Пароль:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {/* <button type="button" onClick={generateRandomPassword}>Генерировать пароль</button>
                <div>Сгенерированный пароль: {password}</div> */}
                <br />
                <button onClick={handleRegister}>Зарегистрироваться</button>

            </div>
        </div >
    )
}

export default RegistrationPage;

