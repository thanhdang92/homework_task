import { Link } from 'react-router-dom'
import '../Styles/createNewTask.css'
const CreateNewTask = ({ isCreate, setIsCreate }) => {

    const handleClickNewTask = () => {
        setIsCreate(false)
    }

    return (
        <>
            <div className="create_newTask">
                <Link to='/create_new_task'>
                    <button onClick={() => handleClickNewTask()}>
                        Create New Task
                    </button>
                </Link>
            </div>
        </>

    )
}

export default CreateNewTask;