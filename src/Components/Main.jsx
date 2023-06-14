import '../Styles/main.css'
import SideBar from "./SideBar"
import TaskContainer from "./TaskContainer"

const Main = () => {
    return (
        <div className="main">
            <SideBar />
            <TaskContainer />
        </div>
    )
}

export default Main