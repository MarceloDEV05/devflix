import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [filmes, SetFilmes] = useState([]);

  const [loading, SetLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "a440320973db39fc00de6bdcb4604c9b",
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(response.data.results.slice(0, 10));
      SetFilmes(response.data.results.slice(0, 10));
      SetLoading(false)
    }
    loadFilmes();
  }, []);

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando Filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={`${filmes.title}`}
              />
              <Link to={`/filme/${filme.id}`}>acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
