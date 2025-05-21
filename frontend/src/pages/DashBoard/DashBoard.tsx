import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './DashBoard.css'

const DashBoard = () => {

    return (
        <div className="dashboard-container">
            <div className="dashboard-container__sidebar">
                <Sidebar />
            </div>

            <div className="dashboard-container__content">

            </div>
        </div>
    );
};

export default DashBoard