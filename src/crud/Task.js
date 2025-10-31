import { useState } from "react";
export const Task = () => {
 {/* CRUD Operations - To Do List */}  
  const [todoList, setTodoList] = useState([
    { id: 1, taskName: "Task 1" },
    { id: 2, taskName: "Task 2" },
]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length===0?1:todoList[todoList.length - 1]?.id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditText(task.taskName);
  };

  const updateTask = (id) => {
    const updatedList = todoList.map((task) => 
      task.id === id ? {...task, taskName : editText} : task
    );
    setTodoList(updateTask);
    setEditTaskId(null);
    setEditText("");
  };
  return (
    <div>
      {/* CRUD Operations - To Do List */}
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => (
          <div key={task.id}>
            {editTaskId === task.id ? (
                <>
              <input 
                value={editText }
                onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updateTask(task.id)}>Update</button>
                <button onClick={() => setEditTaskId(null)}>Cancel</button>
                </>
                ) : (
                    <>
            <span>{task.taskName}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => startEdit(task)}>Edit</button>   
            </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};