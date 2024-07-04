import "../../css/styles.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => (
  <>
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RootLayout;
