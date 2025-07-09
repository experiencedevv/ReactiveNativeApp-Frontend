import axios from "axios";

export async function ObterPost() {
    try {
        const response = await axios.get('http://localhost:3000/posts');
        return response.data
        //console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

async function ObterPostPorId(id) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        return response.data
        //console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

export async function cadastrarPost(dados) {
    try {
        const response = await axios.post(`http://localhost:3000/posts`,dados);
        console.log('Usuários (Axios):', response.data);
        return response.data
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

 export async function atualizarPost(id,dados) {
    try {
        const response = await axios.put(`http://localhost:3000/posts/${id}`,dados);
        console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

export async function deletarPost(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/posts/${id}`);
        console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao deletar (Axios):', error);
    }
}


// endpoints tabela usuário
export async function cadastrarUsuario(dados) {
    try {
        console.log("teste",dados)
        const response = await axios.post(`http://localhost:3000/usuario`,dados);
        console.log('Usuários (Axios):', response.data);
        return response.data
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

export async function atualizarUsuario(id,dados) {
    try {
        const response = await axios.put(`http://localhost:3000/usuario/${id}`,dados);
        console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

