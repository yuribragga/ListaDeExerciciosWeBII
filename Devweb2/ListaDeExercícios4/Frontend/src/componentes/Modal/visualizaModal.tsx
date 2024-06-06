import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { clienteEspecifico } from "../../api/clienteApi";
import { reservaEspecifica } from "../../api/reservasApi";
import { IReadCliente, IReadReserva2 } from "../../Interface/interface";

interface VisualizarModalProps {
    onHide: () => void;
    tipo: 'cliente' | 'reserva'; // Tipo de dados a serem exibidos
    id: string; // ID do cliente ou reserva a ser visualizado
    show: boolean;
}

interface DadosVisualizacao {
    cliente?: IReadCliente;
    reserva?: IReadReserva2;
}

const VisualizarModal: React.FC<VisualizarModalProps> = ({ tipo, id, onHide, show }) => {
    const [dados, setDados] = useState<DadosVisualizacao>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resultados;
                if (tipo === 'cliente') {
                    resultados = await clienteEspecifico(id);
                } else if (tipo === 'reserva') {
                    resultados = await reservaEspecifica(id);
                }

                if (resultados && resultados.data) {
                    setDados(tipo === 'cliente' ? { cliente: resultados.data.cliente } : { reserva: resultados.data.data });
                    console.log(resultados.data.data);
                } else {
                    console.error(`Nenhum resultado encontrado`);
                }
            } catch (error) {
                console.error(`Erro ao buscar ${tipo} específico: ${error}`);
            }
        };

        if (show) {
            fetchData();
        }
    }, [id, show, tipo]);

    return (
        <Modal show={show} onHide={onHide} centered style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none', zIndex: 1050 }}>
            <Modal.Header>
                <Modal.Title style={{ fontSize: '22px', textAlign: 'center', fontWeight: '500' }}>
                    {tipo === 'cliente' ? 'Cliente' : 'Reserva'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: '20px' }}>
                {tipo === 'cliente' && dados.cliente ? (
                    <div>
                        <p><strong>Nome:</strong> {dados.cliente.cli_nome} {dados.cliente.cli_sobrenome}</p>
                        <p><strong>Email:</strong> {dados.cliente.cli_email}</p>
                    </div>
                ) : tipo === 'cliente' && (
                    <p>Nenhum cliente encontrado</p>
                )}
                {tipo === 'reserva' && dados.reserva ? (
                    <div>
                        <p><strong>Cliente:</strong> {dados.reserva.cliente}</p>
                        <p><strong>Hotel:</strong> {dados.reserva.hotel}</p>
                        <p><strong>Localização:</strong> {dados.reserva.localizacao}</p>
                        <p><strong>Tipo de Cozinha:</strong> {dados.reserva.tipoCozinha}</p>
                        <p><strong>Horário:</strong> {dados.reserva.horario}</p>
                    </div>
                ) : tipo === 'reserva' && (
                    <p>Nenhuma reserva encontrada</p>
                )}
            </Modal.Body>
            <Modal.Footer style={{ background: 'none' }}>
                <Button variant="dark" onClick={onHide} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VisualizarModal;
