import Head from 'next/head'
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

const Screen = ({children}) => {
    return (
        <div>
            <Head>
                <title>Skynet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '0', paddingRight: '10%' }}>
                    <div style={{ backgroundColor: '#1F4E79', width: '10%', padding: '10px' }}>
                        <Image src="/logo_branco_sem_bloco.svg" style={{ width: '50px', height: '50%' }} />
                    </div>

                    <div style={{ flex: '1', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <div className="nav-item active">
                                <a className="nav-link" href="#">Chamados</a>
                            </div>
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
                        </div>
                        <div style={{ width: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
                                    Usuário
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </nav>
                <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '25px' }}>
                    {children}
                </div>
            </main>
        </div>
    )

}


export default Screen