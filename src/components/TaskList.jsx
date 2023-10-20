import React from 'react';

function TaskList({ tasks, onMarkCompleted, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onMarkCompleted(task.id)}
          />
          {task.text}
          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;