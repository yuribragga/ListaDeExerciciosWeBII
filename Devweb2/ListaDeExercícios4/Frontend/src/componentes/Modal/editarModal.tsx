import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IUpadateReserva, IUpdateClient } from "../../Interface/interface";
import { clienteEspecifico, editaCliente } from "../../api/clienteApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { editaReserva, reservaEspecifica } from "../../api/reservasApi";

interface EditarModalProps {
    onHide: () => void;
    tipo: 'cliente' | 'reserva';
    clientId?: string 
    reservaId?: string 
    show: boolean;
}

function EditarModal({ tipo, clientId, reservaId, onHide, show }: EditarModalProps) {
    const [clientUpdate, setClientUpdate]= useState<IUpdateClient>({
        cli_nome: '',
        cli_sobrenome: '',
        cli_email: ''
    });
    const [reservaUpdate, setReservaUpdate]= useState<IUpadateReserva>({
        res_horario: ''
    });

    let content;
    
    useEffect(() => {
        async function fetchData() {
            if (tipo === 'cliente' && clientId) {
                try {
                    const resultado = await clienteEspecifico(clientId);
                    setClientUpdate(resultado?.data.cliente);
                } catch (error) {
                    console.error(`Erro ao buscar informações do cliente: ${error}`);
                }
            } else if (tipo === 'reserva' && reservaId) {
                try {
                    const resultado = await reservaEspecifica(reservaId);
                    setReservaUpdate(resultado?.data.reserva);
                } catch (error) {
                    console.error(`Erro ao buscar informações da reserva: ${error}`);
                }
            }
        }
        fetchData();
    }, [tipo, clientId, reservaId]);


    function handleInputChangeClient(event: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        setClientUpdate((prevState: IUpdateClient) => ({
            ...prevState,
            [name]: value
        }));
    }
    

    async function handleSaveChangesClient(){
        try {
            if (clientId) { 
            const resultado = await editaCliente(clientId, clientUpdate);
            if (!resultado) {
                console.error(`Erro ao editar cliente`);
            }
            alert(resultado?.data.message);
            onHide();
            }else {
                console.error("ID de reserva indefinido.");
            }
        } catch (error) {
            console.error(`Erro ao editar cliente: ${error}`);
        }
    }    

    function handleInputChangeReserva(event: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        setReservaUpdate((prevState: IUpadateReserva) => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSaveChangesReserva(){
        try {
            if (reservaId) { 
                const resultado = await editaReserva(reservaId, reservaUpdate);
                if (!resultado) {
                    console.error(`Erro ao editar Reserva`);
                }
                alert(resultado?.data.message);
                onHide();
            } 
        } catch (error) {
            console.error(`Erro ao editar Reserva: ${error}`);
        }
    }
     

    switch(tipo){
        case 'cliente':

            content = (
                <div className="column">
                    <div className="">
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            className="validate"
                            name="cli_nome"
                            value={clientUpdate.cli_nome}
                            onChange={handleInputChangeClient}
                        />
                    </div>
                    <div className=""> 
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input
                            id="sobrenome"
                            type="text"
                            className="validate"
                            name="cli_sobrenome"
                            value={clientUpdate.cli_sobrenome}
                            onChange={handleInputChangeClient}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="text"
                            className="validate"
                            name="cli_email"
                            value={clientUpdate.cli_email}
                            onChange={handleInputChangeClient}
                        />
                    </div>
                </div>
            );
            break;

        case 'reserva':

            content = (
                <div className="column">
                    <div className=""> 
                        <label htmlFor="horario">Horario</label>
                        <input
                            id="horario"
                            type="time"
                            className="validate"
                            name="res_horario"
                            value={reservaUpdate?.res_horario}
                            onChange={handleInputChangeReserva}
                        />
                    </div>
                </div>
            );

            break;
    }

    return(
        <Modal show={show} onHide={onHide} style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
            <Modal.Header>
                <Modal.Title style={{ fontSize:'22px', textAlign: 'center', fontWeight: '500'}}>Editar Informações</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer style={{ background: 'none' }}>
                <Button variant="outline-dark" onClick={onHide} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Fechar
                </Button>
                <Button variant="danger" onClick={tipo === 'cliente' ? handleSaveChangesClient : handleSaveChangesReserva} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditarModal;
