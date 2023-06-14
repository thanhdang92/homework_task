import { useContext } from 'react'
import '../Styles/main.css'
import { DataContext } from './DataContext'
const TaskItem = () => {
    const { dataTask } = useContext(DataContext)
    return (
        <>
            {dataTask && dataTask.length > 0 &&
                dataTask.map((item) => {
                    let styleStt = {}
                    if (item.status === "New") {
                        styleStt = {
                            color: "green"
                        }
                    }
                    if (item.status === "Doing") {
                        styleStt = {
                            color: "red"
                        }
                    }
                    if (item.status === "Done") {
                        styleStt = {
                            color: "blue"
                        }
                    }
                    return (
                        <div className="taskItem" key={item.id}>
                            <ul>
                                <li><b>Title:{item.title}</b> </li>
                                <li>Creator:{item.creator}</li>
                                <li style={styleStt}><b>Status:{item.status}</b></li>
                            </ul>
                            <p><b>Desscription:</b>{item.desscription}</p>
                        </div>
                    )
                })}

        </>

    )
}

export default TaskItem;