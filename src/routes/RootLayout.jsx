import "../css/styles.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const RootLayout = () => (
  <>
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);
