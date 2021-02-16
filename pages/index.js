import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { postChamado, getAllChamados } from '../services/ChamadoService'
import Modal, { ModalHeader, ModalBody, ModalFooter, useModal } from '../components/modal'
import Input from '../components/input'
import { ListChamados } from '../components/list'

const Home = ({ chamados }) => {
  const [chamadoText, setChamadoText] = useState('')
  const [chamadoDescription, setChamadoDescription] = useState('')
  const [chamadosList, setChamadosList] = useState(chamados)

  const { isShowing, toggle } = useModal();
  const onClickCriarChamado = () => toggle()

  const onCriarChamado = () => {
    if (chamadoText) {
      const id = chamadosList.length + 1

      postChamado(id, chamadoText).then(() => {
        setChamadosList([...chamadosList, { id, text: chamadoText }])
        setChamadoText('')
        setChamadoDescription('')

        toggle()
      })
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Skynet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Input
          onChangeText={setChamadoText}
          chamadoText={chamadoText}
          containsButton
          buttonText="Criar Chamado"
          onClickButton={onClickCriarChamado}
        />

        <Modal {...{ isShowing, toggle }}>
          <ModalHeader {...{ toggle }}>
            Novo Chamado #{chamadosList.length + 1}
          </ModalHeader>
          <ModalBody>
            <label>Título do Chamado</label>
            <Input
              onChangeText={setChamadoText}
              chamadoText={chamadoText}
            />
            <label>Descrição do Chamado</label>
            <Input
              onChangeText={setChamadoDescription}
              chamadoText={chamadoDescription}
            />

          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" type="button" onClick={onCriarChamado}>
              Criar
            </button>
            <button className="btn btn-danger" type="button" onClick={toggle}>
              Fechar
            </button>
          </ModalFooter>
        </Modal>

        <div>
          <ListChamados listaChamados={chamadosList}/>
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

export default Home
