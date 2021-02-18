import { ListChamados } from '../../components/list'
import { getAllChamados } from '../../services/ChamadoService'
import Screen from '../../components/screen/Screen'
import { useRouter } from 'next/router'

const ChamadosHome = ({ chamados }) => {
    const router = useRouter()

    const onClickCreateNew = () => {
        router.push('/chamado/new');
    }

    return (
        <Screen>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>Chamados</h4>
                <div style={{ width: '20%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <button className="btn btn-mini btn-info">
                        Filtros
                    </button>
                    <button onClick={onClickCreateNew} className="btn btn-mini btn-info">
                        Novo Chamado
                    </button>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <ListChamados listaChamados={chamados} />
            </div>
        </Screen>
    )

}

export async function getServerSideProps() {
    const data = await getAllChamados()
    return {
        props: { chamados: data },
    }
}

export default ChamadosHome