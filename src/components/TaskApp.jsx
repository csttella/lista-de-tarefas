import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState('ativos');

  // Função para adicionar tarefa
  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Função para marcar tarefa como concluída
  const markTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Função para excluir tarefa
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/ativos">Tarefas Ativas</Link>
              </li>
              <li>
                <Link to="/concluídas">Tarefas Concluídas</Link>
              </li>
            </ul>
          </nav>
          
        </div>
        <Route path="/ativos" exact>
          <TaskList
            tasks={tasks.filter((task) => !task.completed)}
            onMarkCompleted={markTaskCompleted}
            onDelete={deleteTask}
          />
        </Route>
        <Route path="/concluídas" exact>
          <TaskList
            tasks={tasks.filter((task) => task.completed)}
            onMarkCompleted={markTaskCompleted}
            onDelete={deleteTask}
          />
        </Route>
      </Router>
      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default TaskApp;