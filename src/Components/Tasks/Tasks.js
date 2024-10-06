import React from "react";
import './index.css'

function Tasks ({ tasks, setTasks }) {
    const deleteTask = (task) => {
        const updatedTasks = [...tasks];
        const index = tasks.indexOf(task);

        //removing arr element
        if (index > -1) {
            updatedTasks.splice(index, 1);
        }

        //removing the div
        const deletedTask  = document.getElementById(task).parentNode.parentNode;
        deletedTask.remove();
    };

    const finishTask = (task) => {

        try {
            const finishedTask = document.getElementById(task);
        
            if (finishedTask.style.textDecoration === "none" || finishedTask.style.textDecoration === "") {
                finishedTask.style.textDecoration = "line-through";
            } else {
                finishedTask.style.textDecoration = "none";
            }
        }

        catch (e){
            console.log('Złapano błąd:', e);
        }
    };

    return (
        <div className = "Tasks">
            <h1>Twoje zadania na dziś!</h1>
            {tasks.map((task, index) => (
                <div className = "task" onClick={() => finishTask(task)}>
                    <li key={index}>
                        <p className = "taskName" id = {task} >{task}</p>
                        <button className="deleteButton" onClick={() => deleteTask(task)}>🗑️</button>
                    </li>
                </div>
            ))}
        </div>
    );
}

export default Tasks;