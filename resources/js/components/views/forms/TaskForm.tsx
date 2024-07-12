import React from 'react'
import apiService from '../../services/apiServices';
import { useTaskContext} from "../../context/TaskContext";

const TaskForm = () => {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const { updateContextData } = useTaskContext();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        apiService.post("save-task", {
            title,
            description,
          })
          .then(() => {
            // console.log(res);
            setTitle("");
            setDescription("");
            updateContextData("");
          });
      };

  return (
    <div className='flex flex-col gap-3'>
        <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
            className="input input-bordered w-full"
        />

        <textarea className="textarea textarea-borderd min-h-52" value={description}  onChange={handleDescriptionChange} placeholder="Description"></textarea>

        <button className="btn btn-active btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TaskForm