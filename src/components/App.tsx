import "./App.scss";
import DesktopSidebarImg from "/images/bg-sidebar-mobile.svg";

const App = () => {
  return (
    <main>
      <img src={DesktopSidebarImg} title="sidebar background image" />
      <Form />
    </main>
  );
};

export default App;
