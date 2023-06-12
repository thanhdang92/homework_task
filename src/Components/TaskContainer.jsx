import '../Styles/main.css'
import TaskItem from "./TaskItem";
import FormCreateNewTask from './FormCreateNewTask';
const TaskContainer = ({ isCreate, setIsCreate, data, setData, dataTask, setDataTask }) => {
    return (
        <div className="taskContainer">
            {isCreate ?
                <TaskItem
                    dataTask={dataTask}
                />
                :
                <FormCreateNewTask
                    isCreate={isCreate}
                    setIsCreate={setIsCreate}
                    data={data}
                    setData={setData}
                    dataTask={dataTask}
                    setDataTask={setDataTask}
                />
            }
        </div>
    )
}

export default TaskContainer;