import { Outlet } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";

import IconBtn from "../components/button/IconBtn";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import useFetchViewportWidth from "../hooks/useFetchViewportWidth";

function LoggedInPagesLayout(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const viewportWidth = useFetchViewportWidth();

  const navlinkClickHandler = (value: boolean) => {
    setIsSidebarOpen(value);
  };

  return (
    <div className="flex h-screen">
      <aside
        className={`fixed desktop:static top-0 left-0 z-40 desktop:block grow-0 w-[275px] h-full shrink-0 ${
          isSidebarOpen
            ? "mobile-sidenav-open"
            : viewportWidth <= 1250
            ? "mobile-sidenav"
            : ""
        }`}
      >
        <Sidebar clickNavlink={navlinkClickHandler} />
        <IconBtn
          btnIcon={<MdKeyboardDoubleArrowRight color="white" size={22} />}
          additionalStyles={[
            "absolute",
            "top-2/4",
            "right-[-25px]",
            "translate-y-[-50%]",
            "desktop:hidden",
            "z-30",
            "rotate-0",
            `${isSidebarOpen ? "rotate-180" : ""}`
          ]}
          clickHandler={() => setIsSidebarOpen((currentValue) => !currentValue)}
        />
      </aside>
      <main className="relative grow h-full overflow-auto bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50">
        <nav className="sticky top-0 left-0 w-full h-14 shadow-md mb-4 z-10">
          <Topbar />
        </nav>
        <section className="px-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default LoggedInPagesLayout;
