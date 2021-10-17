import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../API/api";
import "./styles.css";

export default function MovieList(pros) {
  const [state, setState] = useState({
    movies: [],
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await api.get("movies");
        console.log(res.data);

        setState({ movies: [...res.data] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="pag-home">
        {state.movies.map((list) => {
          return (
            <div key={list._id}>
              <Link to={`/${list.id}/${list.title}`}>
                <img className="cover" src={list.image_url} alt={list.title} />
                <div className="text-cover col-7 ">
                  <h6>{list.title}</h6>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
