import '../Styles/header.css'
import CreateNewTask from "./CreateNewTask";
import Search from "./Search";
const Header = () => {
    return (
        <div className="header">
            <CreateNewTask />
            <Search />
        </div>
    )
}
export default Header;