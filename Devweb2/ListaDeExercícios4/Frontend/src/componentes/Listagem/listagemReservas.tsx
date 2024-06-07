import  { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { IReadReserva } from "../../Interface/interface";
import EditarModal from "../Modal/editarModal";
import ExcluirModal from "../Modal/excluirModal";
import './style.css'
import { listaReservas } from "../../api/reservasApi";
import VisualizarModal from "../Modal/visualizaModal";


function ListagemReservas() {
    const [reservas, setReservas] = useState<IReadReserva[]>([]);
    const [showEditarModal, setShowEditarModal] = useState(false);
    const [showDeletarModal, setShowDeletarModal] = useState(false);
    const [showVisualizaModal, setShowVisualizarModal] = useState(false);
    const [reservaId, setreservaId] = useState<string | number>('');

    useEffect(() => {
        async function fetchListaReservas() {
            try {
                const resultado = await listaReservas();
                if (resultado) {
                    setReservas(resultado.data.reservas);
                
                } else {
                    console.error("Erro ao listar reservas");
                }
            } catch (error) {
                console.error(`Erro ao listar reservas: ${error}`);
            }
        }
        fetchListaReservas();
    }, []);

    function handleEditar(reservaId: number) {
        console.log(reservaId)
        setreservaId(reservaId);
        setShowEditarModal(true);
    }

    function handleDeletar(reservaId: number) {
        setreservaId(reservaId);
        setShowDeletarModal(true);
    }

    function handleVisualizar(reservaId: number){
      setreservaId(reservaId)
      setShowVisualizarModal(true)
    }

    return (
        <div className="reservas-lista">
          {reservas.length > 0 ? (
            reservas.map((reserva) => (
              <div key={reserva.res_id} className="reserva-item">
                <div className="reservasSelecionar" onClick={() => handleVisualizar(reserva.res_id)}>
                  <p>{reserva.res_id}</p>
                </div>
                <div className="editar">
                  <Button variant="outline-danger" onClick={() => handleEditar(reserva.res_id)}>Editar</Button>
                </div>
                <div className="deletar">
                  <Button variant="danger" onClick={() => handleDeletar(reserva.res_id)}>Deletar</Button>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhuma reserva registrada.</p>
          )}
          {showEditarModal && (
            <EditarModal
              show={showEditarModal}
              tipo="reserva"
              onHide={() => setShowEditarModal(false)}
              reservaId={reservaId?.toString()}
            />
          )}
          {showDeletarModal && (
            <ExcluirModal
              show={showDeletarModal}
              onHide={() => setShowDeletarModal(false)}
              tipo="reserva"
              reservaId={reservaId?.toString()}
            />
          )}
          {showVisualizaModal && (
            <VisualizarModal
              show={showVisualizaModal}
              onHide={() => setShowVisualizarModal(false)}
              tipo="reserva"
              id={reservaId?.toString()}
            />
          )}
        </div>
      );
}

export default ListagemReservas;
