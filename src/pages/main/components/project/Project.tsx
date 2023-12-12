import React from "react";
import { useAppSelector } from "../../../../store/hooks";

function Project() {
    const currentProject = useAppSelector((state) => state.currentProject.name)
    return (
        <>
            <p>{currentProject}</p>
        </>
    )
}

export default Project