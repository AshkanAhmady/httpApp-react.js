import "./App.css";
import Discussion from "./ClassBaseProjectFolder/Container/Discussion/Discussion";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
