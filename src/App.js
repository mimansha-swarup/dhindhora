import { createTheme, useTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AllRoutes } from "./routes/Routes";

function App() {
  // const theme = createTheme()
 
  return (
    // <ThemeProvider theme={theme} >

    <div className="App">
      <AllRoutes />
    </div>
    // </ThemeProvider>
  );
}

export default App;
