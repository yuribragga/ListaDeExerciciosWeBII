import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {  IReadCliente } from "../../Interface/interface";
import { listaClientes } from "../../api/clienteApi";
import EditarModal from "../Modal/editarModal";
import ExcluirModal from "../Modal/excluirModal";
import './style.css'
import VisualizarModal from "../Modal/visualizaModal";

function ListagemClientes() {
    const [clientes, setClientes] = useState<IReadCliente[]>([]);
    const [showEditarModal, setShowEditarModal] = useState(false);
    const [showDeletarModal, setShowDeletarModal] = useState(false);
    const [showVisualizaModal, setShowVisualizarModal] = useState(false);
    const [clienteId, setClienteId] = useState<string | number>('');

    useEffect(() => {
        async function fetchListaClientes() {
            try {
                const resultado = await listaClientes();
                if (resultado) {
                    setClientes(resultado.data.clientes);
                } else {
                    console.error("Erro ao listar clientes");
                }
            } catch (error) {
                console.error(`Erro ao listar clientes: ${error}`);
            }
        }
        fetchListaClientes();
    }, []);

    function handleEditar(clienteId: number) {
        console.log(clienteId)
        setClienteId(clienteId);
        setShowEditarModal(true);
    }

    function handleDeletar(clienteId: number) {
        setClienteId(clienteId);
        setShowDeletarModal(true);
    }
    function handleVisualizar(clienteId: number){
      setClienteId(clienteId)
      setShowVisualizarModal(true)
    }

    window.location.reload();

    return (
        <div className="clientes-lista">
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <div key={cliente.cli_id} className="cliente-item">
                <div className="clientesSelecionar" onClick={() => handleVisualizar(cliente.cli_id)}>
                  <p>{cliente.cli_nome}</p>
                </div>
                <div className="editar">
                  <Button variant="outline-danger" onClick={() => handleEditar(cliente.cli_id)}>Editar</Button>
                </div>
                <div className="deletar">
                  <Button variant="danger" onClick={() => handleDeletar(cliente.cli_id)}>Deletar</Button>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum cliente cadastrado.</p>
          )}
          {showEditarModal && (
            <EditarModal
              show={showEditarModal}
              onHide={() => setShowEditarModal(false)}
              tipo="cliente"
              clientId={clienteId?.toString()}
            />
          )}
          {showDeletarModal && (
            <ExcluirModal
              show={showDeletarModal}
              onHide={() => setShowDeletarModal(false)}
              tipo="cliente"
              clientId={clienteId?.toString()}
            />
          )}
          {showVisualizaModal && (
            <VisualizarModal
              show={showVisualizaModal}
              onHide={() => setShowVisualizarModal(false)}
              tipo="cliente"
              id={clienteId?.toString()}
            />
          )}
        </div>
      );
}

export default ListagemClientes;
