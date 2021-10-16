import { Link } from "react-router-dom";
import "./styles.css";
import SearchBar from "../Search";

export default function NavbarFix() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <SearchBar />
        <div></div>
      </div>
    </nav>
  );
}
