import { Route, Routes } from "react-router-dom";
import ClientePage from "../pages/clientePage";
import ReservaPage from "../pages/reservaPage";
import HotelPage from "../pages/hotelPage";



function Rotas() {
    return (
            <Routes>
                <Route path="/" element={<ClientePage/>} /> 
                <Route path="/reserva" element={<ReservaPage/>} />
                <Route path="/hoteis" element={<HotelPage/>} />  
            </Routes>
    );
}

export default Rotas;
