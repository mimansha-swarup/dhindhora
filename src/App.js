import "./App.css";
import { AllRoutes } from "./routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "./helper/user";

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
      <AllRoutes />
    </div>
  );
}

export default App;
