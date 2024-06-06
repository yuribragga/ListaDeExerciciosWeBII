import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ICreateClient, ICreateReserva } from "../../Interface/interface";
import { cadastrarCliente } from "../../api/clienteApi";
import { cadastrarReserva } from "../../api/reservasApi";

interface CadastrarModalProps {
  onHide: () => void;
  tipo: "cliente" | "reserva";
  show: boolean;
}

function CadastrarModal({ onHide, tipo, show }: CadastrarModalProps) {
  const [clienteNovo, setClienteNovo] = useState<ICreateClient>({
    cli_nome: "",
    cli_sobrenome: "",
    cli_email: "",
  });

  const [reservaNova, setReservaNova] = useState<ICreateReserva>({
    res_horario: "",
    cli_id: 0,
    hotel_id: 0,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    switch (tipo) {
      case "cliente":
        setClienteNovo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "reserva":
          setReservaNova((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        
        break;
      default:
        break;
    }
  }

  async function handleSaveChanges() {
    try {
      let resultado;
      switch (tipo) {
        case "cliente":
          resultado = await cadastrarCliente(clienteNovo);
          break;
        case "reserva":
          resultado = await cadastrarReserva(reservaNova);
          break;
        default:
          break;
      }
      if (!resultado) {
        console.error(`Erro ao cadastrar ${tipo}`);
      }else{
        alert(resultado?.data.message);
        onHide();
      }
    } catch (error) {
      console.error(`Erro ao cadastrar ${tipo}: ${error}`);
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      style={{
        background: "none",
        border: "none",
        overflowX: "hidden",
        boxShadow: "none",
      }}
    >
      <Modal.Header>
        <Modal.Title
          style={{ fontSize: "22px", textAlign: "center", fontWeight: "500" }}
        >
          {tipo === "cliente" ? "Cadastrar Cliente" : "Cadastrar Reserva"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {tipo === "cliente" ? (
          <div className="column">
            <div className="input-field col s6">
              <input
                id="nome"
                type="text"
                className="validate"
                name="cli_nome"
                value={clienteNovo.cli_nome}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="input-field col s6">
              <input
                id="sobrenome"
                type="text"
                className="validate"
                name="cli_sobrenome"
                value={clienteNovo.cli_sobrenome}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sobrenome">Sobrenome</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                type="text"
                className="validate"
                name="cli_email"
                value={clienteNovo.cli_email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email">E-mail</label>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="input-field col s6">
              <input
                id="horario"
                type="time"
                className="validate"
                name="res_horario"
                value={reservaNova.res_horario}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="horario">Horário</label>
            </div>
            <div className="input-field col s6">
              <input
                id="cli_id"
                type="number"
                className="validate"
                name="cli_id"
                value={reservaNova.cli_id}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="cli_id">Código do Cliente</label>
            </div>
            <div className="input-field col s6">
              <input
                id="hotel_id"
                type="number"
                className="validate"
                name="hotel_id"
                value={reservaNova.hotel_id}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="hotel_id">Código do Hotel</label>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer style={{ background: "none" }}>
        <Button
          variant="outline-dark"
          onClick={onHide}
          style={{ margin: "0.5rem", boxShadow: "none", border: "none" }}
        >
          Fechar
        </Button>
        <Button
          variant="danger"
          onClick={handleSaveChanges}
          style={{ margin: "0.5rem", boxShadow: "none", border: "none" }}
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CadastrarModal;
