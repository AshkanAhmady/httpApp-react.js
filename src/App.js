import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
