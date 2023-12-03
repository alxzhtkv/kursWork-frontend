import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';



function WelcomePage() {


    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegistration = () => {
        navigate('/registration');
    };

    return (

        <div className='container'>
            <div className='header'>
                <img src={require('../../img/cosmoLogo.png')} className='logo_image' />
                <p>Cosmotask</p>

            </div>
            <div className='info_wrap'>

                <div className='text_wrap'>
                    <p className='welcome_text'>Управляй своим временем<br /> правильно!</p>
                    <p className='welcome_descr_text'>Достижение целей становится проще!</p>
                </div>

                <div className='buttons_wrap'>
                    <button className='btn' onClick={() => goToLogin()}>
                        Вход
                    </button>

                    <button className='btn' onClick={() => goToRegistration()}>
                        Регистрация
                    </button>
                </div>



            </div>
            <div className='image_wrap'>
                <img src={require('./img/workerllustration.png')} className='preview_image' />
            </div>
        </div>
    )
}

export default WelcomePage