import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'; // Importe o componente de card
import { IReadHotel } from "../../Interface/interface";
import './style.css';
import { listaHoteis } from "../../api/hotelApi";

function ListagemHoteis() {
    const [hoteis, setHoteis] = useState<IReadHotel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchListaHotel() {
            try {
                const resultado = await listaHoteis();
                if (resultado) {
                    setHoteis(resultado.data.hoteis);
                } else {
                    console.error("Erro ao listar hotéis");
                }
            } catch (error) {
                console.error(`Erro ao listar hotéis: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        fetchListaHotel();
    }, []);
    window.location.reload();

    return (
        <div className="hotel-lista">
            {loading ? (
                <p>Carregando...</p>
            ) : hoteis.length > 0 ? (
                hoteis.map((hotel) => (
                    <Card key={hotel.hotel_id}style={{ width: '18rem', marginBottom: '10px', margin: '1rem', display:'inline', padding:'1px' }}>
                        <Card.Header>{hotel.hotel_nome}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>ID:</strong> {hotel.hotel_id}
                            </Card.Text>
                            <Card.Text>
                                <strong>Localização:</strong> {hotel.hotel_localizacao}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>Nenhum hotel registrado.</p>
            )}
        </div>
    );
}

export default ListagemHoteis;

