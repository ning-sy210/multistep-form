import Form from "./form/Form";
import DesktopSidebarImg from "/images/bg-sidebar-mobile.svg";

import "./App.scss";

const App = () => {
  return (
    <>
      <img src={DesktopSidebarImg} title="sidebar background image" />
      <Form />
    </>
  );
};

export default App;
