import React, { useEffect, useState } from "react";
import './style.css'
import { ITask } from "../../types";
import { cardStates, taskStates } from "../../main/config/enums";

function TaskCard({ task }: { task: ITask }) {

    const [cardType, setCardType] = useState<string>('')


    useEffect(() => {
        const getStatusCardType = () => {
            switch (task.status) {
                case taskStates.NEW:
                    return cardStates.NEW;
                case taskStates.PLANNED:
                    return cardStates.PLANNED;
                case taskStates.IN_PROCESS:
                    return cardStates.IN_PROCESS;
                case taskStates.COMPLETED:
                    return cardStates.COMPLETED;
                default:
                    return null;
            }
        };

        const newCardType = getStatusCardType();
        if (newCardType !== null) {
            setCardType(newCardType);
        }
    }, [task.status]);


    return (
        <div className="task_card">
            <div className={cardType}>

            </div>
        </div>
    )
}

export default TaskCard