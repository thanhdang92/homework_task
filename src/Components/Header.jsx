import '../Styles/header.css'
import CreateNewTask from "./CreateNewTask";
import Search from "./Search";
const Header = ({ isCreate, setIsCreate }) => {
    return (
        <div className="header">
            <CreateNewTask
                isCreate={isCreate}
                setIsCreate={setIsCreate}
            />
            <Search />
        </div>
    )
}
export default Header;