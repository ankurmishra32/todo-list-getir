import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title) {
            alert('Please add a task!');
            return;
        }
        onAdd({title, completed});
        setTitle('');
        setCompleted(false);
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Complete</label>
                <input type='checkbox' value={completed} onChange={(e) => setCompleted(e.currentTarget.checked)}></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

AddTask.propTypes = {}

export default AddTask