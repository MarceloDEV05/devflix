import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import './filmeInfo.css'

function Filme() {
  const { id } = useParams();
  const [filme, SetFilme] = useState({});
  const [loading, SetLoading] = useState(true);

  useEffect(() => {

    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "a440320973db39fc00de6bdcb4604c9b",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response.data);
          SetFilme(response.data)
          SetLoading(false);
        })
        .catch(() => {
          console.log("filme nao encontrado");
        });
    }


    loadFilme();

    return () => {
      console.log("Componente foi desmontado");
    };
  },);


  if (loading) {
    return (
      <div>
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }


  return (

    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>{filme.vote_average}/10</strong>
     </div>
  );
}

export default Filme;
