import axios from 'axios'

export const getClientByName = async (name) => {
    const response = await axios.get('http://localhost:8000/clientes?name_like=' + name);
    return await response.data;
}

export const getProductByName = async (name) => {
    const response = await axios.get('http://localhost:8000/produtos?name_like=' + name);
    return await response.data;
}

export const getEquipeByName = async (name) => {
    const response = await axios.get('http://localhost:8000/equipes?name_like=' + name);
    return await response.data;
}