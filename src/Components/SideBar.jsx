import '../Styles/main.css'
const SideBar = ({ isCreate, setIsCreate, data, setData, dataTask, setDataTask }) => {
    let sttNew = data.filter(item => item.status === "New");
    let sttDoing = data.filter(item => item.status === "Doing");
    let sttDone = data.filter(item => item.status === "Done");



    const handleClickAllTask = () => {
        setDataTask(data)
        setIsCreate(true)
    }
    const handleClickNewTask = () => {
        setDataTask(sttNew)
        setIsCreate(true)
    }
    const handleClickDoingTask = () => {
        setDataTask(sttDoing)
        setIsCreate(true)
    }
    const handleClickDoneTask = () => {
        setDataTask(sttDone)
        setIsCreate(true)
    }
    return (
        <div className="sideBar">
            <ul>
                <li onClick={() => handleClickAllTask()} > All Task</li>
                <li onClick={() => handleClickNewTask()}>New Task</li>
                <li onClick={() => handleClickDoingTask()}>Doing Task</li>
                <li onClick={() => handleClickDoneTask()}>Done Task</li>
            </ul>
        </div >
    )
}

export default SideBar;