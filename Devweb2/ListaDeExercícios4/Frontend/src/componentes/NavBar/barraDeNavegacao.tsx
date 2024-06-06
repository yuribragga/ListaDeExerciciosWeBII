import 'materialize-css/dist/css/materialize.min.css';
import { useEffect } from 'react';
import M from 'materialize-css';
import './style.css'; 

interface NavBarProps {
    botoes: { nome: string, rota: string }[]
}

function BarraNavegacao({ botoes }: NavBarProps) {
    useEffect(() => {
        let sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems);
    }, []);

    return (
        <>
            <nav style={{backgroundColor:'#386DF5'}}>
                <div className="nav-wrapper" >
                    <a href="#!" className="brand-logo" style={{ marginLeft: '2rem', fontSize: '25px' }}>Faça suas reservas aqui!</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {botoes.map((botao) => (
                            <li key={botao.nome}>
                                <a href={botao.rota} style={{ fontSize: '18px' }}>{botao.nome}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {botoes.map((botao) => (
                    <li key={botao.nome}>
                        <a href={botao.rota}>{botao.nome}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default BarraNavegacao;

