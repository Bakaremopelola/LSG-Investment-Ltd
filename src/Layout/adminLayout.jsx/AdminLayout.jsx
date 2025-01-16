import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./AdminLayout.css"; // Example CSS for layout styling (customize as needed)

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
