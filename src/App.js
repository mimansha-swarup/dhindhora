import "./App.css";
import { AllRoutes } from "./routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "./helper/user";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {auth:{token}} = useSelector(state=>state)
  const dispatch = useDispatch();

  useEffect(() => {
    if ( token){
     dispatch(getAllUsers())

    }
  }, [dispatch,token]);
  return (
    <div className="App">
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      
      />
      <AllRoutes />
    </div>
  );
}

export default App;
