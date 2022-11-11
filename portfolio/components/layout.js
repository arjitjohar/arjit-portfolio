const { default: Footer } = require("./footer");
const { default: Navbar } = require("./navbar");

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
