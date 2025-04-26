import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> 
            </main>                        
            <Footer />
        </>
    )
}

export default UserLayout;