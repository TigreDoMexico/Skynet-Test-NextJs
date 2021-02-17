import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Input from '../../components/input'
import styles from '../../styles/pages/Account.module.css'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitLogin = () => {
        if(email && password)
            router.push('/')
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.loginArea}>
                <div>
                    <h3 className={styles.title}>Faça seu login</h3>
                </div>
                <div style={{width: '50%', paddingTop: '2rem'}}>
                    <Input
                        placeholder="Seu e-mail"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Input
                        placeholder="Sua senha"
                        onChangeText={setPassword}
                        value={password}
                    />
                    <div className={styles.buttonArea}>
                        <button
                            type="button"
                            className="btn btn-default"
                            style={{backgroundColor: '#00AEEF', width: '100px'}}
                            onClick={onSubmitLogin}>
                            <span style={{color: '#fff'}}>Entrar</span>
                        </button>
                        <a href="#">Esqueci minha Senha</a>
                    </div>
                    <button
                        type="button"
                        className="btn btn-default"
                        style={{border: '1px solid #00AEEF', width: '100%'}}>
                        <span style={{color: '#00AEEF'}}>Não tem conta? Crie agora.</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;