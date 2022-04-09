import "../index.css";
import Footer from "../FunctionalProjectFolder/Component/Footer";
import Header from "../FunctionalProjectFolder/Component/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
