import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../store/hooks";
import './style.css'
import TaskCard from "../../../components/taskCard/TaskCard";
import { ITask } from "../../../types";
import { tasks } from "../../config/data";
import { taskStates } from "../../config/enums";

function Project() {
    const currentProject = useAppSelector((state) => state.currentProject.name)
    const [newTasks, setNewTasks] = useState<ITask[] | null>();
    const [plannedTasks, setPlannedTasks] = useState<ITask[] | null>();
    const [inProcessTasks, setInProcessTasks] = useState<ITask[] | null>();
    const [completedTasks, setCompletedTasks] = useState<ITask[] | null>();

    useEffect(() => {
        setNewTasks(tasks.filter(task => task.status === taskStates.NEW));
        setPlannedTasks(tasks.filter(task => task.status === taskStates.PLANNED));
        setInProcessTasks(tasks.filter(task => task.status === taskStates.IN_PROCESS));
        setCompletedTasks(tasks.filter(task => task.status === taskStates.COMPLETED));

    }, [])

    return (
        <>
            <p className="project_name">{currentProject}</p>
            <div className="cards_wrapper">
                <div className="cards_column">
                    {newTasks?.map((task) => (
                        <TaskCard key={task.task_id} task={task} />
                    ))}

                </div>
                <div className="cards_column">
                    {plannedTasks?.map((task) => (
                        <TaskCard key={task.task_id} task={task} />
                    ))}
                </div>
                <div className="cards_column">
                {inProcessTasks?.map((task) => (
                        <TaskCard key={task.task_id} task={task} />
                    ))}
                </div>
                <div className="cards_column">
                {completedTasks?.map((task) => (
                        <TaskCard key={task.task_id} task={task} />
                    ))}
                </div>

            </div>
        </>

    )
}

export default Project