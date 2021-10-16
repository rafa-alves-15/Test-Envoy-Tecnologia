import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";

export default function Details() {
  const [state, setState] = useState({
    title: "",
    synopsis: "",
    genre: "",
    release_date: "",
    language: [],
    subtitled: [],
    director: [],
    image_url: "",
    link: "",
    evaluation: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await api.get(`movies/${id}`);
        console.log(res.data);
        setState({ ...res.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, [id]);

  return (
    <div>
      <div className="d-flex ">
        <div>
          <img
            style={{ width: "65%" }}
            src={state.image_url}
            alt={state.title}
          />
        </div>
        <div className="col-7 ">
          <h1 className=" mb-5">{state.title}</h1>
          {state.synopsis}
        </div>
      </div>
    </div>
  );
}
