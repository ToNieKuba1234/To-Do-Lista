import './index.css'

function Form ({ tasks, setTasks }) {

    const handleAddTask = () => {
        let current_task = document.getElementById("task-input").value;

        if (current_task !== "") {
            setTasks([...tasks, current_task]);
            document.getElementById("task-input").value = "";
            document.getElementById("task-input").focus();
        }
    };

    return (
        <div className = "Form">
            <input type = "text" id = "task-input" placeholder = 'Podaj zadanie...' />
            <button className = "add-task" onClick={handleAddTask}>Dodaj</button>
        </div>
    )
}

export default Form; 