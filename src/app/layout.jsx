import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";
import Footer from "@/components/Footer";
import { GlobalProvider } from "./context/GlobalContext";

export const metadata = {
  title: "PropertyPulse",
  description: "Find the Pefect Rental Property",
  keyword: "rental, rent, property",
};

function MainLayout({ children }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default MainLayout;
