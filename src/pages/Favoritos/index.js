import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import './favoritos.css'

function Favoritos() {
  const [filmes, SetFilmes] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@devflix");
    SetFilmes(JSON.parse(myList) || []);
  }, []);

  function excluirFilme(id){
    let filterMovies = filmes.filter( (filme)=> {
        return(
            filme.id !== id
        )

    })

    SetFilmes(filterMovies)
    localStorage.setItem('@devflix', JSON.stringify(filterMovies))
    toast.success('Filme removido com sucesso')
  }


  return (
    <div className="filmesSalvos">
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span>OPS... <br/> Você ainda não tem filmes salvos :(</span>}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>

              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
