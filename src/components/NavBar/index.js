import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../API/api";

export default function NavbarFix() {
  const [state, setState] = useState([]);
  const [filterTitle, setfilterTitle] = useState(state);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = state.filter((data) => {
      return data.title.search(value) !== -1;
    });
    setfilterTitle(result);
  };

  useEffect(() => {
    api
      .get("/movies")
      .then((res) => {
        console.log(res.data);
        setState(res.data);
        setfilterTitle(res.data);
      })
      .catch((error) => {
        console.log("Erro");
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => handleSearch(event)}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
        <div>
          {filterTitle.map((value, index) => {
            return (
              <div key={value.id}>
                <div>{value.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
