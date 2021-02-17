import Head from 'next/head'
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { ListChamados } from '../../components/list'
import { getAllChamados } from '../../services/ChamadoService'

const ChamadosHome = ({ chamados }) => {
    return (
        <div>
            <Head>
                <title>Skynet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div style={{backgroundColor: '#1F4E79', width: '10%', height: '120%', marginTop: '-30px', marginLeft: '-20px', marginBottom: '-20px' }}>
                        <Image src="/logo_branco_com_bloco.svg" style={{width: '50px', height: '50%'}}/>
                    </div>

                    <div style={{ flex: '1', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Chamados</a>
                                </li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                                        Cadastro
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>Clientes</Dropdown.Item>
                                        <Dropdown.Item>Usuário</Dropdown.Item>
                                        <Dropdown.Item>Equipe</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </div>
                        <div style={{width: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Dropdown>
                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                    Configurações
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                    Configurações
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </nav>
                <div>
                    <ListChamados listaChamados={chamados} />
                </div>
            </main>
        </div>
    )

}

export async function getServerSideProps() {
    const data = await getAllChamados()
    return {
        props: { chamados: data },
    }
}

export default ChamadosHome