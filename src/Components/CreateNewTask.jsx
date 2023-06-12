import '../Styles/createNewTask.css'
const CreateNewTask = ({ isCreate, setIsCreate }) => {

    const handleClickNewTask = () => {
        setIsCreate(false)
    }

    return (
        <>
            <div className="create_newTask">
                <button onClick={() => handleClickNewTask()}>Create New Task</button>
            </div>
        </>

    )
}

export default CreateNewTask;