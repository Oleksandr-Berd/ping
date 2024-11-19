import { ToastContainer } from "react-toastify";
import "./App.css";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <SharedLayout />
      <Footer/>
    </div>
  );
}

export default App;
