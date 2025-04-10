import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

import './filmeInfo.css'

function Filme() {
  const { id } = useParams();
  const navigation = useNavigate();


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
          navigation("/", { replace: true})
          return;
          
        });
    }


    loadFilme();

    return () => {
      console.log("Componente foi desmontado");
    };
  },[id, navigation]);


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
      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="area-buttons">
        <button>Salvar</button>

        <button>
          <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
        </button>

      </div>
     </div>
  );
}

export default Filme;
