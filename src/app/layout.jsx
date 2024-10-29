import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse",
  description: "Find the Pefect Rental Property",
  keyword: "rental, rent, property",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default MainLayout;
