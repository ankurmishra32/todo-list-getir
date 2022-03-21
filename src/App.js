import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTask();
      setTasks(tasks);
    }
    getTasks();
  }, []);

  const fetchTask = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    return data;
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? {...task, completed: !task.completed} : task)));
  }

  const addTask = (task) => {
    const id = tasks.length + 1;
    setTasks([...tasks, {id, ...task}]);
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
