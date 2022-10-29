import "./navhorizontal.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Sidebar = () => {
  
  return (
    <div className="sidebar" style={{backgroundColor:'rgba(76.85625672340393, 187.63121098279953, 246.60922944545746, 1)' }}  >
      <div className="top">
        <Link to="/panel" style={{ textDecoration: "none" }}>
          <span style={{ color: "white" }} className="logo">ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title" style={{ color: "white" }}>MAIN</p>
          <li>
            <DashboardIcon className="icon" style={{ color: "white" }} />
            <span style={{ color: "white" }}>Dashboard</span>
          </li>
          <p className="title" style={{ color: "white" }}>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" style={{ color: "white" }}/>
              <span style={{ color: "white" }}>Productores</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white" }}>Productos</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" style={{ color: "white" }}/>
            <span style={{ color: "white" }}>Categorias</span>
          </li>
          
          <p className="title" style={{ color: "white" }}>USEFUL</p>
          
          <li>
            <NotificationsNoneIcon className="icon" style={{ color: "white" }} />
            <span style={{ color: "white" }}>Notifications</span>
          </li>
        
          <p className="title" style={{ color: "white" }}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" style={{ color: "white" }} />
            <span style={{ color: "white" }}>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" style={{ color: "white" }}/>
            <span style={{ color: "white" }}>Logout</span>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
