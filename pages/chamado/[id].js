import { getChamadoById, getTop3Chamados } from '../../services/ChamadoService'
import { useRouter } from 'next/router'
import styles from '../../styles/ChamadoPage.module.css'

const Chamado = ({ chamado }) => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            {router.isFallback ?
                <h3>Carregando...</h3>
                :
                <h2>Chamado #{chamado.id} - {chamado.text}</h2>
            }
        </div>
    )
}

export async function getStaticPaths() {
    const chamados = await getTop3Chamados()
    const paths = chamados.map((chamado) => {
        return { params: { id: chamado.id.toString() } }
    })

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const chamado = await getChamadoById(context.params.id)
    return {
        props: { chamado: chamado[0] }
    };
}

export default Chamado
