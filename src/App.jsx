
import Client from "./components/Clients/Client";
import Manage from "./components/Maages/Manage";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Client />
      <Section />
      {/* <Manage/> */}
    </div>
  )
}

export default App;
