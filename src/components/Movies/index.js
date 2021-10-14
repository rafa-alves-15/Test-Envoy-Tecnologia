import { useState, useEffect } from "react";
import api from "../../API/api";

export default function MovieList() {
  const [state, setState] = useState({
    Movies: [],
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await api.get("/Movies");
        console.log(res.data);

        setState({ Movies: [...res.data] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <tbody>
        {state.Movies.map((list) => {
          return (
            <tr key={list._id}>
              <td>{list.image_url}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}
