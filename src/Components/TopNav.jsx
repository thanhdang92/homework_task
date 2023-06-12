import { Link } from "react-router-dom"
import '../Styles/topNav.css'
const TopNav = () => {
    return (
        <>
            <div className="topnav">
                <Link className="active" to='/'>Home</Link>
                <Link to='/all_task'>All Task</Link>
                <Link to='/new_task'>New Task</Link>
                <Link to='/doing_task'>Doing Task</Link>
                <Link to='/done_task'>Done Task</Link>
                <Link className="btn_rsData" to='/reset_data'>Clear All Task</Link>
            </div>
        </>
    )
}
export default TopNav;