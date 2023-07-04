import { NavLink } from "react-router-dom";
import { SiSimpleanalytics } from "react-icons/si";
import { FaClipboardList, FaShirt, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

type SidebarProps = { clickNavlink: (value: boolean) => void };

function Sidebar({ clickNavlink }: SidebarProps): JSX.Element {
  const userState = useSelector((state: any) => state.user);

  return (
    <nav className="bg-gray-800 text-gray-50 h-full flex flex-col p-5 pt-0 gap-4">
      <div className="mt-4">
        <h3 className="mb-3 text-gray-300 font-semibold">Quick Links</h3>
        <div className="flex flex-col gap-3">
          {userState && userState.role === "Admin" && (
            <NavLink
              to="/analytics"
              className="side-nav-links"
              onClick={() => clickNavlink(false)}
            >
              <SiSimpleanalytics size={18} /> Analytics
            </NavLink>
          )}
          <NavLink
            to="/orders"
            className="side-nav-links"
            onClick={() => clickNavlink(false)}
          >
            <FaClipboardList size={18} /> Orders
          </NavLink>
          <NavLink
            to="/products"
            className="side-nav-links"
            onClick={() => clickNavlink(false)}
          >
            <FaShirt size={18} /> Products
          </NavLink>
          {userState && userState.role === "Admin" && (
            <NavLink
              to="/users"
              className="side-nav-links"
              onClick={() => clickNavlink(false)}
            >
              <FaUser size={18} /> Users
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
