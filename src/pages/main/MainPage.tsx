import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import './style.css'
import { FaUserLarge, FaChartSimple, FaFolder,FaComment, FaFile} from "react-icons/fa6";

function MainPage() {

    const [date, setdate] = useState<string>()

    const projects_names = [
        { name: 'Project 1' },
        { name: 'Project 2' },
        { name: 'Project 3' },
        { name: 'Projgtrgrtgegetegretggreeeeeeeetgrtgrtgect 4' },
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

    return (
        <div className='main_container'>
            <div className='main_header'>
                <div className='logo'>
                    <img src={require('../../img/cosmoLogo.png')} className='logo_image' />
                    <p>Cosmotask</p>

                </div>
                <div className='date'><p>{date}</p></div>
                <button className='new_project_bttn'>
                    Создать новый проект
                </button>
            </div>
            <div className='big_wrapper'>
                <div className='menu'>
                    <div className='menu_item'>
                        <FaUserLarge />
                        <p>Пользователи</p>
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




                    </div>
                 

                </div>
                <div className='container'>

                </div>
            </div>
        </div>
    )
}

export default MainPage