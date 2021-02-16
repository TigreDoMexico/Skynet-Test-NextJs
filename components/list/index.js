import style from '../../styles/Components.module.css'
import Link from 'next/link'

export const ListChamados = ({ listaChamados }) => {
    return (
        <div>
            {listaChamados.length === 0 ?
                <p>Sem chamados na sua fila</p>
                :
                (<ul className={`list-group`} style={{width: '30rem'}}>
                    {listaChamados.map((el, idx) => {
                        return (<ListChamadosElement chamado={el} key={idx} />)
                    })}
                </ul>)
            }
        </div>
    )
}

const ListChamadosElement = ({chamado}) => {
    return (
        <li className="list-group-item">
            <Link href="/chamado/[id]" as={`/chamado/${chamado.id}`}>
                <a>#{chamado.id} - {chamado.text}</a>
            </Link>
        </li>
    )
}


