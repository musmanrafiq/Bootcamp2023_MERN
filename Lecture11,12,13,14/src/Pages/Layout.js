import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
    return (
        <div className="App">
            <Header />
            <div style={{ 'height': '490px' }}>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;