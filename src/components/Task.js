import PropTypes from 'prop-types'

const Task = ({ task, onToggle }) => {
  return (
      <div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
          <h3>{task.title}</h3>
      </div>
  )
}

Task.propTypes = {}

export default Task