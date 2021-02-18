import { useState } from 'react'
import AsyncSelect from 'react-select/async';
import { useRouter } from 'next/router'
import Select from 'react-select';
import Screen from '../../components/screen/Screen'
import Input from '../../components/input'
import { getClientByName, getProductByName, getEquipeByName } from '../../services/CadastroService'
import { postChamado } from '../../services/ChamadoService'

const NewChamado = () => {
    const router = useRouter()

    const [assunto, setAssunto] = useState('');
    const [cliente, setCliente] = useState('');
    const [produto, setProduto] = useState('');
    const [equipe, setEquipe] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [descricao, setDescricao] = useState('');

    const getCliente = async (inputValue, callback) => {
        const response = await getClientByName(inputValue)
        if (response)
            callback(response.map((el) => { return { value: el.name, label: el.name } }))
    }

    const getProduto = async (inputValue, callback) => {
        const response = await getProductByName(inputValue)
        if (response)
            callback(response.map((el) => { return { value: el.name, label: el.name } }))
    }

    const getEquipe = async (inputValue, callback) => {
        const response = await getEquipeByName(inputValue)
        if (response)
            callback(response.map((el) => { return { value: el.name, label: el.name } }))
    }

    const onCreateChamado = () => {
        if (assunto) {
            const id = Math.floor(Math.random() * 1000);

            const chamado = {
                id,
                assunto,
                cliente: cliente.label,
                produto: produto.label,
                equipe: equipe.label,
                prioridade: prioridade.label,
                descricao,
                status: 1,
                prazoSLA: 3
            }

            postChamado(chamado).then(() => {
                router.push('/chamado');
            })
        }
    }

    return (
        <Screen>
            <div>
                <h3>Novo Chamado</h3>
            </div>
            <div>
                <div>
                    <label>Assunto*</label>
                    <Input
                        onChangeText={setAssunto}
                        value={assunto}
                        placeholder="Assunto"
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ width: '50%' }}>
                        <label>Cliente*</label>
                        <AsyncSelect
                            instanceId="Clientes"
                            cacheOptions
                            defaultOptions
                            loadOptions={getCliente}
                            onChange={setCliente}
                        />
                    </div>
                    <div style={{ width: '50%' }}>
                        <label>Produto*</label>
                        <AsyncSelect
                            instanceId="Produto"
                            cacheOptions
                            defaultOptions
                            loadOptions={getProduto}
                            onChange={setProduto}
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '33%' }}>
                        <label>Equipe*</label>
                        <AsyncSelect
                            instanceId="Equipe"
                            cacheOptions
                            defaultOptions
                            loadOptions={getEquipe}
                            onChange={setEquipe}
                        />
                    </div>
                    <div style={{ width: '30%' }}>
                        <label>Prioridade*</label>
                        <Select
                            instanceId="Prioridade"
                            options={[{ value: 'alta', label: 'Alta' }, { value: 'media', label: 'Média' }, { value: 'baixa', label: 'Baixa' }]}
                            onChange={setPrioridade}
                        />
                    </div>
                    <div style={{ width: '37%' }}>
                        <label>Anexo</label>
                        <Input
                            onChangeText={() => { }}
                            value={''}
                            placeholder="Anexo"
                        />
                    </div>
                </div>
                <div>
                    <label>Descrição*</label>
                    <Input
                        onChangeText={setDescricao}
                        value={descricao}
                        placeholder="Descrição"
                    />
                </div>
            </div>
            <div>
                <button onClick={onCreateChamado} className="btn btn-success">
                    Enviar
                </button>
            </div>
        </Screen>
    )
}

export default NewChamado