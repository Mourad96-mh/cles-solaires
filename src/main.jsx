import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Produits from "./pages/Produits.jsx";
import Chevrons from "./pages/Chevrons.jsx";
import Structures from "./pages/Structures.jsx";
import Pieux from "./pages/Pieux.jsx";
import References from "./pages/References.jsx";
import Contact from "./pages/Contact.jsx";
import Devis from "./pages/Devis.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import Confidentialite from "./pages/Confidentialite.jsx";
import NotFound from "./pages/NotFound.jsx";

/* Same page tree, rendered once for FR ("/") and once for EN ("/en").
   Lowercase name: this is a route-building helper, not a component. */
function pageRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="produits" element={<Produits />} />
      <Route path="chevrons" element={<Chevrons />} />
      <Route path="structures" element={<Structures />} />
      <Route path="pieux" element={<Pieux />} />
      <Route path="references" element={<References />} />
      <Route path="contact" element={<Contact />} />
      <Route path="devis" element={<Devis />} />
      <Route path="mentions-legales" element={<MentionsLegales />} />
      <Route path="confidentialite" element={<Confidentialite />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>{pageRoutes()}</Route>
        <Route path="/en" element={<App />}>{pageRoutes()}</Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
