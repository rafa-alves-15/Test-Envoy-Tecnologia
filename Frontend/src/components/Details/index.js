import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../API/api";

export default function Details() {
  const [state, setState] = useState({
    title: "",
    synopsis: "",
    genre: [],
    release_date: "",
    language: [],
    subtitled: [],
    director: "",
    image_url: "",
    link: "",
    evaluation: "",
    icon: "",
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
      <Link className="text-black" to="/">
        <i className="fas fa-angle-left"></i> Voltar
      </Link>
      <div className="d-flex mt-5 ">
        <div>
          <img
            style={{ width: "65%", marginBottom: "4%" }}
            src={state.image_url}
            alt={state.title}
          />
          <p style={{ paddingLeft: "15%" }}>
            Avalição: {state.evaluation} <i className="fas fa-star"></i>
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>Gênero:</strong> {state.genre.join(", ")}
            </li>
            <li>
              <strong>Idioma:</strong> {state.language.join(", ")}
            </li>
            <li>
              <strong>Legenda:</strong> {state.subtitled.join(", ")}
            </li>
            <li>
              <strong>Diretor:</strong> {state.director}
            </li>
            <li>
              <strong>Lançamento:</strong> {state.release_date}
            </li>
          </ul>
        </div>
        <div className="col-7 ">
          <h1 className="mb-3">{state.title}</h1>
          <p className=" mt-5">{state.synopsis}</p>
        </div>
      </div>
      <a className="m-1" href={state.link}>
        <img
          style={{ width: "4%", height: "4%" }}
          src={state.icon}
          alt="icon"
        />
      </a>
      Assista Agora
    </div>
  );
}
