import { ToastContainer } from 'react-toastify';
import './App.css';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <SharedLayout/>
    </div>
  );
}

export default App;
