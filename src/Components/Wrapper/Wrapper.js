import './index.css'
import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';
import React, { useState } from 'react';

function Wrapper () {
    const [tasks, setTasks] = useState([]);

    return (
        <div className = 'Wrapper'>
            <h1>Lista Zadań</h1>
            <Form tasks={tasks} setTasks={setTasks} />
            <Tasks tasks = {tasks} setTasks = {setTasks} />
        </div>
    )
}

export default Wrapper;