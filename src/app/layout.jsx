import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse",
  description: "Find the Pefect Rental Property",
  keyword: "rental, rent, property",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default MainLayout;
