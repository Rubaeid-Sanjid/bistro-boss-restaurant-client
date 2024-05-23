import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";

const Main = () => {
    const location = useLocation();

    // const noHeaderFooter = location.pathname === '/login';
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp');
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;