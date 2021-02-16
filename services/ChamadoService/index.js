import axios from 'axios';

export const getAllChamados = async () => {
    const response = await axios.get('http://localhost:8000/chamados');
    return await response.data;
}

export const getTop3Chamados = async (id) => {
    const response = await axios.get('http://localhost:8000/chamados?_page=1&_limit=3')
    return await response.data;
}

export const getChamadoById = async (id) => {
    const response = await axios.get('http://localhost:8000/chamados?id=' + id)
    return await response.data;
}

export const postChamado = async (numeroDoChamado, chamadoText) => {
    const newChamado = {id: numeroDoChamado, text: chamadoText}
    return axios.post('http://localhost:8000/chamados', newChamado)
}

