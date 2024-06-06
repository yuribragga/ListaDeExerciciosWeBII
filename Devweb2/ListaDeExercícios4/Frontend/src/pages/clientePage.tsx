import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import ListagemClientes from "../componentes/Listagem/listagemClientes";
import CadastrarModal from "../componentes/Modal/cadastrarModal";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientePage() {
    useEffect(() => {
        M.AutoInit(); // Inicializa todos os componentes do Materialize
    }, []);

    const [showCadastrarModal, setShowCadastrarModal] = useState(false);

    function handleCadastrar() {
        setShowCadastrarModal(true);
    }

    return (
            <section className="clientes">
                <div className="cadastrar">
                <Button  variant="outline-success" onClick={handleCadastrar}>Novo Cliente</Button>
                </div>
            <div className="listagem">
             <ListagemClientes />
            </div>
            {showCadastrarModal && (
                <CadastrarModal
                tipo="cliente"
                    show={showCadastrarModal}
                    onHide={() => setShowCadastrarModal(false)}
                />
            )}  
        </section>
        
        
    );
}

export default ClientePage;
