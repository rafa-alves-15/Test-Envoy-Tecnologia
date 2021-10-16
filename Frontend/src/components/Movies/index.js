import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../API/api";

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
      <div className="d-flex ">
        {state.movies.map((list) => {
          return (
            <div key={list._id}>
              <Link to={`/${list.id}/${list.title}`}>
                <img
                  style={{ width: "69%", marginLeft: "13%", marginTop: "5%" }}
                  src={list.image_url}
                  alt={list.title}
                />
                <div
                  className="col-7 mt-3 text-black text-decoration-underline"
                  style={{ marginLeft: "14%" }}
                >
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
