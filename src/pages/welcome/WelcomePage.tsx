import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

interface Dot {
    id: number;
    x: number;
    y: number;
}

function WelcomePage() {


    const navigate = useNavigate();

    const goToContactPage = () => {
        navigate('/registration');
    };

    return (

        <div className='container'>

          

            <div className='cover'>
         
                <div className='info_wrap'>
                    <div className='welcome'>
                    <p className='welcome_text'>Управляйте временем!</p>
                    <p className='welcome_descr_text'>Достижение целей становится проще!</p>
                    <button onClick={()=>goToContactPage()}>
                        Регистрация
                    </button>
                    </div>
                  

                </div>
              </div>
        </div>
    )
}

export default WelcomePage