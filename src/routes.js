import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Filme from './pages/Filmes'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }  />
                <Route path='/filmes/:id' element={ <Filme/> } />
                <Route/>
                <Route/>
                <Route/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp