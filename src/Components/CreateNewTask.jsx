import { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/createNewTask.css'
import { DataContext } from './DataContext'
const CreateNewTask = () => {
    const { setIsCreate } = useContext(DataContext)
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