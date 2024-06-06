import React from "react";
import { Modal, Button } from "react-bootstrap";
import { excluirCliente } from "../../api/clienteApi";
import { excluiReserva } from "../../api/reservasApi";
import 'bootstrap/dist/css/bootstrap.min.css';

interface ExcluirModalProps {
    onHide: () => void;
    tipo: 'cliente' | 'reserva';
    clientId?: string ;
    reservaId?: string ;
    show: boolean;
}

function ExcluirModal({ tipo, clientId, reservaId, onHide, show }: ExcluirModalProps) {

    async function handleDeleteChanges() {
        let resultado;
        switch (tipo) {
            case 'cliente':
                if(clientId){
                   resultado = await excluirCliente(clientId);
                    if (!resultado) {
                        console.error(`Erro ao excluir cliente`);
                    } else {
                        alert(`Cliente excluído com sucesso!`);
                    } 
                }
                
                break;
            case 'reserva':
                if (reservaId){
                  resultado = await excluiReserva(reservaId);
                    if (!resultado) {
                        console.error(`Erro ao excluir reserva`);
                    } else {
                        alert(resultado.data.message);
                    }  
                }
                break;
            default:
                console.error('Tipo inválido');
                break;
        }
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide} centered style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none', zIndex: 1050 }}>
            <Modal.Header>
                <Modal.Title style={{ fontSize: '22px', textAlign: 'center', fontWeight: '500' }}>Confirmar Exclusão</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: '20px' }}>
                <p>Tem certeza de que deseja excluir?</p>
            </Modal.Body>
            <Modal.Footer style={{ background: 'none' }}>
                <Button variant="dark" onClick={onHide} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleDeleteChanges} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Excluir
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExcluirModal;
