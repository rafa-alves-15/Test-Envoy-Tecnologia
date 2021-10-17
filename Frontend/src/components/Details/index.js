import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
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
    video: "",
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
        <i className="fas fa-angle-left"></i>
        Voltar
      </Link>
      <div className="page-fit">
        <div>
          <img
            className="movies-cover"
            src={state.image_url}
            alt={state.title}
          />
          <p className="evaluation">
            Avalição: {state.evaluation}
            <i className="fas fa-star"></i>
          </p>
          <ul className="information-list col-7">
            <li>
              <strong>Gênero: </strong>
              {state.genre.join(", ")}
            </li>
            <li>
              <strong>Idioma: </strong>
              {state.language.join(", ")}
            </li>
            <li>
              <strong>Legenda: </strong>
              {state.subtitled.join(", ")}
            </li>
            <li>
              <strong>Diretor: </strong>
              {state.director}
            </li>
            <li>
              <strong>Lançamento: </strong>
              {state.release_date}
            </li>
          </ul>
          <div>
            <a className="icon-text" href={state.link}>
              <img className="platform-icon" src={state.icon} alt="icon" />
              Assista Agora
            </a>
          </div>
        </div>
        <div className="col-8">
          <h1 className="title">{state.title}</h1>
          <p className="abstract">{state.synopsis}</p>
          <iframe
            width="75%"
            height="47%"
            src={state.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
