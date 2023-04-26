import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { createContext, useState } from "react";
import useUserName from "../CustomHooks/useUserName";

// step 1 in context api
export const ApplicationContext = createContext();

function Layout() {

    const [userName] = useUserName('Bbc');

    return (
        <ApplicationContext.Provider value={userName}>
            <div className="App">
                <Header />
                <div style={{ 'height': '490px' }} >
                    <Outlet></Outlet>
                </div>
                <Footer />
            </div>
        </ApplicationContext.Provider>
    )
}

export default Layout;