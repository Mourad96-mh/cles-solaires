import { Outlet } from "react-router-dom";
import { LangProvider } from "./i18n.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </LangProvider>
  );
}
