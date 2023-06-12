import { Link } from 'react-router-dom';
import '../Styles/main.css'
const SideBar = ({ setIsCreate, data, setDataTask }) => {
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
                <Link to="/all_task">
                    <li onClick={() => handleClickAllTask()} >All Task</li>
                </Link>
                <Link to="/new_task">
                    <li onClick={() => handleClickNewTask()}>New Task</li>
                </Link>
                <Link to="/doing_task">
                    <li onClick={() => handleClickDoingTask()}>Doing Task</li>
                </Link>
                <Link to="/done_task">
                    <li onClick={() => handleClickDoneTask()}>Done Task</li>
                </Link>
            </ul>
        </div >
    )
}

export default SideBar;