import axios from "axios";

const api = axios.create({
    timeout:10000,
})

export default api

//Utilize como URL:
//http://172.19.49//pizzariateste/api/v1 -> API do professor que só funciona na escola

//http://localhost:8080/endereço da sua api -> API do aluno, geralmente rodando na porta 8080 (spring boot)