import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../API/api";
import "./styles.css";

export default function SearchBar() {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = { title_like: search };
    if (search) {
      api
        .get("/movies", { params })
        .then((res) => {
          setFilter(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFilter([]);
    }
  }, [search]);

  function handleChange(event) {
    let value = event.target.value;
    setSearch(value);
  }

  return (
    <div>
      <div className="search">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
      </div>

      <div>
        {filter.map((list) => {
          return (
            <div className="container">
              <ul className="list">
                <Link to={`/${list.id}/${list.title}`}>
                  <li>
                    <p>{list.title}</p>
                  </li>
                  <li>
                    <img
                      className="list-cover"
                      src={list.image_url}
                      alt={list.title}
                    />
                  </li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
