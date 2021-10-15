import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Movies";
import NavbarFix from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavbarFix />
      <div className="container mt-5">
        <Route exact path="/" component={MovieList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
