import { Container } from "@mui/material";
import "./App.css";
// import CardComponent from "./components/CardComponent";
// import FirstComponent from "./components/FirstComponent";
// import GridComponent from "./components/GridComponent";
// import ListComponent from "./components/ListComponent";
import MuiNavbar from "./components/Navbar/MuiNavbar";
// import Navbar from "./components/Navbar/Navbar";
// import HomePage from "./pages/HomePage";
// import RegisterPage from "./pages/RegisterPage";
// import Login from "./pages/LoginPage";
import Router from "./routes/Router";

function App() {
  return (
    <Container>
      <header>
        <MuiNavbar />
      </header>
      <main>
        <Router />
      </main>
      <footer></footer>
    </Container>
  );
}

export default App;
