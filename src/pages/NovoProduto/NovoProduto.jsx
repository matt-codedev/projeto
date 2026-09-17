import React, {useState, useEffect} from "react"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import CredentialUser from "../../components/CredentialUser";

import api from "../../services/api";

const NovoProduto = () => {

    const [categorias, setCategorias] = useState ([])

    const [categoriasId, setCategoriasId] = useState("")

    const [nome, setNome] = useState ("")
    const[precoVenda, setPrecoVenda] = useState ("")
    const[descricao, setDescricao] = useState ("")

    useEffect( ( ) =>{
            api
    .get("/categorias")
    .then((response)=>{
      setCategorias(response.data.data)
    })
    .catch((error)=>{
      console.error(`Erro ao buscar a lista de categorias. ${error}`)
    })
     },[ ] )

     const escolherCategoria = (e) =>{
       setCategoriasId(e.target.value)  
     }

     const enviarProduto = async (e) => {
      e.preventDefault();
      const produto = {
        nome: nome,
        precoVenda: parseFloat(precoVenda),
        tipo: "Grande",
        descricao: descricao,
        categoriasId: Number(categoriasId)
      }
      try {
        const response = await api.post("/produtos", produto,{
          "Content-Type" : "application/json"
        })
        alert(`${(response.data.data.nome)}cadastrado com sucesso!`)
        setNome("")
        setPrecoVenda("")
        setDescricao("")
      } catch(error){
        console.error(`Não foi possível salvar o produto ${error}`)
      }
     }
    return (
        <div className="container">
            <MenuFuncionario/>
            <CredentialUser title="Cadastro de produtos"/>
            <form onSubmit={enviarProduto} className="container-fluid p-4"> 
                <div className="mb-3"> 
                    <label className="form-label">Nome:</label> 
                    <input 
                      type="text" 
                      className="form-control" 
                      value={nome}
                      onChange={(e)=> setNome(e.target.value)}
                      required 
                    /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Preço:</label> 
                    <input 
                      type="text" 
                      className="form-control"  
                      value={precoVenda}
                      onChange={(e)=> setPrecoVenda(e.target.value)}
                      required 
                    /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Descrição:</label> 
                    <textarea 
                      className="form-control" 
                      value={descricao}
                      onChange={(e)=> setDescricao(e.target.value)}
                      rows="3" 
                      required 
                    ></textarea> 
                </div> 
                <div className="mb-3"> 
                    <label className="block mb-1 font-semibold">Categoria:</label> 
                     <select 
                   value={categoriasId}
                   onChange={escolherCategoria}
                     className="border p-2 w-full rounded" 
                     required 
                     > 
                         <option value="">Selecione uma categoria</option> 
                         {
                          categorias
                          .filter((cat)=> cat.codStatus === true)
                          .map((cat)=>(
                          <option key={cat.Id} value={cat.Id}>
                            {cat.nome}
                            </option>
                          ))
                         }
                     </select> 
                </div> 
 
                <button type="submit" className="btn btn-primary w-100"> 
                    Adicionar Produto 
                </button> 
 
            </form> 

        </div>
    )
}

export default NovoProduto