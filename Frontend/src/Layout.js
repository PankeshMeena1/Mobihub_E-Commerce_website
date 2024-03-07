import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
// import Header from "./Admin_pages/Admin_components/Header";
// import Footer from "./Admin_pages/Admin_components/Footer";

import {  Outlet } from "react-router-dom";

const Layout=()=>{

    return(
        <>
            <Header/>
            
            <Outlet/>
            
            <Footer/>

            
        </>
    )
}
export default Layout;