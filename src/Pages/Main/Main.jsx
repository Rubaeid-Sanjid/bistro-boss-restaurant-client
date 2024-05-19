import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;