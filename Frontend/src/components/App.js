import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarFix from "./NavBar";
import MovieList from "./Movies";
import Details from "./Details";
import FooterFix from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarFix />
      <div className="container mt-5">
        <Route exact path="/" component={MovieList} />
        <Route path="/:id/:title" component={Details} />
      </div>
      <FooterFix />
    </BrowserRouter>
  );
}
