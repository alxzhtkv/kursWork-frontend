import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import './style.css'
import { FaUserLarge, FaChartSimple, FaFolder, FaCommentDots, FaFile, FaStar, FaCircleUser, FaAngleDown, FaPlus } from "react-icons/fa6";
import { access } from 'fs';
import { useNavigate } from 'react-router-dom';
import { IEmployee } from '../types';
import { setCurrentContainerState } from '../../store/slices/ContainerState';
import Info from './components/info/Info';


function MainPage() {

    const navigate = useNavigate()

    const [date, setdate] = useState<string>()
    const [employee, setEmployee] = useState<IEmployee | null>()
    const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch();

    const projects_names = [
        { name: 'Project 1' },
        { name: 'Project 2' },
        { name: 'Project 3' },
        { name: 'Project 4' },
        { name: 'Project 5' },
        { name: 'Project 6' },
        { name: 'Project 7' },
        { name: 'Project 8' },
        { name: 'Project 9' },
        { name: 'Project 10' },
        { name: 'Project 11' },
    ]

    function getCurrentDate() {
        const currentDate = new Date();

        const options = {
            year: "numeric" as const,
            month: "long" as const,
            day: "numeric" as const,
        };

        const formatter = new Intl.DateTimeFormat("ru-RU", options);
        const formattedDate = formatter.format(currentDate);

        setdate(formattedDate);
    }

    useEffect(() => {
        getCurrentDate();
    }, [])

    function logOut() {
        localStorage.removeItem('accessToken')
        navigate("/")
    }

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('http://localhost:8000/getUserData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accessToken }),
            });

            const data = await response.json();
            console.log(data);
            setEmployee(data)

        } catch (error) {
            console.error(error);

        }

    };



    return (
        <div className='main_container'>

            <div className='main_menu'>
                <div className='main_menu_header'>
                    <img src={require('../../img/cosmoLogo.png')} className='logo_image' />
                    Cosmotask
                </div>
                <div className='menu_item' onClick={() => dispatch(setCurrentContainerState('users'))}>
                    <FaUserLarge size={14} />
                    <p>Пользователи</p>
                </div>


                <div className='menu_item' onClick={() => setIsProjectsOpen((prev) => !prev)}>
                    <FaFolder size={14} />
                    <p>Проекты</p>
                    <FaAngleDown style={{ marginLeft: '45%' }} />
                </div>
                {isProjectsOpen &&
                    <div className='projects_open'>

                        <div className='new_project'>Добавить проект
                            <FaPlus/></div>




                        {projects_names.map((nameObject, index) => (
                            <p className='projects_names'
                                key={index}
                                onClick={() => dispatch(setCurrentContainerState('project'))}>
                                {nameObject.name}</p>
                        ))}
                    </div>
                }
                <div className='menu_item' onClick={() => dispatch(setCurrentContainerState('files'))}>
                    <FaFile size={14} />
                    <p>Файлы</p>
                </div>
                <div className='menu_item' onClick={() => dispatch(setCurrentContainerState('statistics'))}>
                    <FaChartSimple size={14} />
                    <p>Статистика</p>
                </div>
                <div className='menu_item' onClick={() => dispatch(setCurrentContainerState('comments'))}>
                    <FaCommentDots size={14} />
                    <p>Комментарии</p>
                    <div className='circle'>
                        <p>4</p>

                    </div>
                    {/* <FaAngleDown style={{ marginLeft: '45%' }} /> */}
                </div>


            </div>
            <div className='info_container'>
                <div className='info_container_header'>
                    <div className='hi_box'>
                        <FaCircleUser color='rgb(95, 116, 141)' />
                        <p>Hi, {' '}</p>
                        <p className='name'>{employee?.firstName} {employee?.lastName}!</p>

                    </div>
                    <div className='logout_box' onClick={() => logOut()}>

                        <p className='name'>Выйти</p>

                    </div>

                </div>
                <Info />

            </div>
            {/* <div className='main_header'>
                <div className='logo'>
                    <img src={require('../../img/cosmoLogo.png')} className='logo_image' alt='logo' />
                    <p>Cosmotask</p>

                </div>
                <div className='date'><p>{date}</p></div>
                <button className='new_project_bttn' onClick={() => logOut()}>
                    Выйти
                </button>
            </div> */}
            {/* <div className='big_wrapper'> */}
            {/* <div className='menu'>
                    <div className='menu_item'>
                        <FaUserLarge />
                        <p>Пользователи</p>
                    </div>
                    <div className='menu_item'>
                        <FaStar />
                        <p>Рейтинг</p>
                    </div>

                    <div className='menu_item'>
                        <FaChartSimple />
                        <p>Статистика</p>
                    </div>
                    <div className='menu_item'>
                        <FaComment />
                        <p>Комментарии</p>
                    </div>
                    <div className='menu_item'>
                        <FaFile />
                        <p>Файлы</p>
                    </div>

                    <div className='projects_item'>
                        <div className='projects_item_header'>
                            <FaFolder />
                            <p>Проекты</p>
                        </div>
                        <div className='projects'>

                            {projects_names.map((project) => (
                                <div className='projects_names'>
                                    <p>{project.name}</p>

                                </div>

                            ))}
                        </div>




                    </div> */}


            {/* </div> */}
            {/* <div className='container'>

                </div> */}
            {/* </div> */}
        </div>
    )
}

export default MainPage