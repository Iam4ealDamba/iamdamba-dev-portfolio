// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ||||||||||||||||||||||||||||| Layout Component ||||||||||||||||||||||||||||||||||||

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  // Return
  return (
    <div aria-label="App Container" className="">
      <Header />
      {children}
      <Footer />
      <ToastContainer
        theme="dark"
        position="bottom-right"
        draggable
        hideProgressBar={false}
        autoClose={3000}
        transition={Bounce}
      />
    </div>
  );
};
export default Layout;
