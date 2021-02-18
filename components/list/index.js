import style from '../../styles/Components.module.css'
import Link from 'next/link'

export const ListChamados = ({ listaChamados }) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Código</th>
                        <th scope="col">Título</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Atribuido a</th>
                        <th scope="col">Status</th>
                        <th scope="col">Prioridade</th>
                        <th scope="col">Prazo SLA</th>
                    </tr>
                </thead>
                <tbody>
                    {listaChamados.map((el, idx) => {
                        return (<ListChamadosElement chamado={el} key={idx} />)
                    })}
                </tbody>
            </table>
        </div>
    )
}

const ListChamadosElement = ({ chamado }) => {
    const statusText = (statusId) => {
        switch(statusId){
            case 1:
                return "Criado"
            case 2:
                return "Em andamento"
            case 3:
                return "Finalizado"
        }
    }

    return (
        <tr>
            <td>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" />
                </div>
            </td>
            <th scope="row">
                #{chamado.id}
            </th>
            <td>
                <Link href="/chamado/[id]" as={`/chamado/${chamado.id}`}>
                    <a>{chamado.assunto}</a>
                </Link>
            </td>
            <td>{chamado.cliente}</td>
            <td>{chamado.produto}</td>
            <td>{statusText(chamado.status)}</td>
            <td>{chamado.prioridade}</td>
            <td>{chamado.prazoSLA}</td>
        </tr>
    )
}


