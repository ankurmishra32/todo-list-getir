import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onToggle }) => {
  return (
    <>
        {tasks.map((task) => (
            <Task task={task} key={task.id} onToggle={onToggle} />
        ))}
    </>
  )
}

Tasks.propTypes = {}

export default Tasks