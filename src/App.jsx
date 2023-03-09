import { Container } from "@mui/material";
import "./App.css";
import CardComponent from "./components/CardComponent";
import FirstComponent from "./components/FirstComponent";
import GridComponent from "./components/GridComponent";
import ListComponent from "./components/ListComponent";
import MuiNavbar from "./components/Navbar/MuiNavbar";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Container>
      <MuiNavbar />
      {/* <Navbar /> */}
      {/* <FirstComponent /> */}
      {/* <ListComponent /> */}
      {/* <GridComponent /> */}
      <HomePage />
      {/* <RegisterPage /> */}
      {/* <HomePage /> */}
      {/* <SignInPage /> */}
    </Container>
  );
}

export default App;
