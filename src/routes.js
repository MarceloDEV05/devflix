import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Filme from './pages/Filme'
import Erro from './pages/Erro'

import Header from './Components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }  />
                <Route path='/filmes/:id' element={ <Filme/> } />

                <Route path='*' element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp