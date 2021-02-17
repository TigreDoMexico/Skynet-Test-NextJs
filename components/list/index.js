import style from '../../styles/Components.module.css'
import Link from 'next/link'

export const ListChamados = ({ listaChamados }) => {
    return (
        <div>
            {listaChamados.length === 0 ?
                <p>Sem chamados na sua fila</p>
                :
                (<table className="table">
                    <thead>
                        <th scope="col"></th>
                        <th scope="col">Código</th>
                        <th scope="col">Título</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Atribuido a</th>
                        <th scope="col">Status</th>
                        <th scope="col">Prioridade</th>
                        <th scope="col">Prazo SLA</th>
                    </thead>
                    <tbody>
                        {listaChamados.map((el, idx) => {
                            return (<ListChamadosElement chamado={el} key={idx} />)
                        })}
                    </tbody>
                </table>)
            }
        </div>
    )
}

const ListChamadosElement = ({chamado}) => {
    return (
        <tr>
            <td>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input"/>
                </div>
            </td>
            <th scope="row">
                #{chamado.id}
            </th>
            <td>
                <Link href="/chamado/[id]" as={`/chamado/${chamado.id}`}>
                    <a>{chamado.text}</a>
                </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}


