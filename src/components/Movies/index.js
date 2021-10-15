import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../API/api";

export default function MovieList() {
  const [state, setState] = useState({
    Movies: [],
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await api.get("/movies");
        console.log(res.data);

        setState({ Movies: [...res.data] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="container m-5">
      <div className="d-flex justify-content-center">
        {state.Movies.map((list) => {
          return (
            <tr key={list._id}>
              <td>
                <Link>
                  <img
                    style={{ width: "200px", padding: "10px" }}
                    src={list.image_url}
                    alt={list.title}
                  />
                </Link>
              </td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}
