import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText) {
      onAddTask(taskText);
      setTaskText('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
}

export default TaskForm;
