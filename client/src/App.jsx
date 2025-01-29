import { useSelector } from "react-redux";
import {
    Navigate,
    Route,
    Routes,
    Outlet,
    useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
// import Navbar from "./components/Navbar";
import {Toaster} from "sonner";

function Layout() {
    // const user = "";
    const { user } = useSelector((state) => state.auth);

    const location = useLocation();

    return user ? (
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="w-1/5 b-screen bg-white top-0 hidden md:block">
                <Sidebar />
            </div>
            {/* <MobileSidebar /> */}
            <div className="flex-1 overflow-y-auto">
                {/* <Navbar /> */}
            </div>
            <div className="p-4 2xl:px-10">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/log-in" state={{ from: location }} replace />
    );
}

function App() {
    return (
        <main className="w-full min-h-screen bg[#f3f4f6]">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/completed/:status" element={<Tasks />} />
                    <Route path="/in-progress/:status" element={<Tasks />} />
                    <Route path="/todo/:status" element={<Tasks />} />
                    <Route path="/team" element={<Users />} />
                    <Route path="/trashed" element={<Trash />} />
                    <Route path="/task/:id" element={<TaskDetails />} />
                </Route>
                <Route path="/log-in" element={<Login />} />
            </Routes>
            <Toaster richColors />
        </main>
    );
}

export default App;
