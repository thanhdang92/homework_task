import '../Styles/main.css'
import TaskItem from "./TaskItem";
import FormCreateNewTask from './FormCreateNewTask';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from './DataContext';
const TaskContainer = () => {
    const { isCreate, setIsCreate, data, setData, dataTask, setDataTask } = useContext(DataContext)
    const location = useLocation();
    const pathname = location.pathname;
    const value = pathname.substring();
    useEffect(() => {
        let newStt = data.filter(item => item.status === "New");
        let doingStt = data.filter(item => item.status === "Doing");
        let doneStt = data.filter(item => item.status === "Done");
        if (value === "/home") {
            setDataTask(data);
            setIsCreate(true);
            return;
        }
        if (value === "/all_task") {
            setDataTask(data);
            setIsCreate(true)
            return;
        }
        if (value === "/new_task") {
            setDataTask(newStt);
            setIsCreate(true);

            return;
        }
        if (value === "/doing_task") {
            setDataTask(doingStt);
            setIsCreate(true);

            return;
        }
        if (value === "/done_task") {
            setDataTask(doneStt);
            setIsCreate(true);
            return;
        }
        if (value === "/create_new_task") {
            setIsCreate(false);
        }
        if (value === "/reset_data") {
            localStorage.removeItem('myData')
            return;
        }
    }, [value])
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