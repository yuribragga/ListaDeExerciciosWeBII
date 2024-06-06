import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import BarraNavegacao from "../componentes/NavBar/barraDeNavegacao";
import Rotas from './rotas';
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect } from 'react';
import M from 'materialize-css';

function Roteador(){
    useEffect(() => {
        M.AutoInit();
    }, []);
    const botoes = [
        {nome: 'Cliente', rota: '/'},
        {nome: 'Reserva', rota: '/reserva'},
        {nome: 'Hoteis', rota: '/hoteis'}
    ]
    return(
        <BrowserRouter> 
            <BarraNavegacao botoes={botoes}/>
            <Rotas/>
        </BrowserRouter>
    )
}

export default Roteador;
