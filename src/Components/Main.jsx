import '../Styles/main.css'
import SideBar from "./SideBar"
import TaskContainer from "./TaskContainer"

const Main = ({ isCreate, setIsCreate, data, setData, dataTask, setDataTask }) => {
    return (
        <div className="main">
            <SideBar
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
                isCreate={isCreate}
                setIsCreate={setIsCreate}
            />
            <TaskContainer
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
            />
        </div>
    )
}

export default Main