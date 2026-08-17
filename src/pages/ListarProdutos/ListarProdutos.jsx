import React, {useState, useEffect} from "react"

import { Link } from "react-router-dom"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";   
import api from "../../services/api"

const ListarProduto = () => {

  const [produtos, setProdutos] = useState ([])

  useEffect(()=>{
    api
    .get("/produtos")
    .then((response)=>{
      console.log(response.data.data)
      setProdutos(response.data.data)
    })
    .catch((error)=>{
      console.error("Erro ao buscar a lista de produtos", error)
    })
  },[])
/*
const arrayProdutos = [
    {
        id: 1,
        nome: "Pizza calabresa",
        precoVenda:59.90,
        descricao: "Pizza com bastante cebola"
    },
    {
        id: 2,
        nome: "Pizza calabresa",
        precoVenda:59.90,
        descricao: "Pizza com bastante cebola"

    },
    {
        id: 3,
        nome: "Pizza calabresa",
        precoVenda:59.90,
        descricao: "Pizza com bastante cebola"

    }

]
    */
 return(
    <div className="container">
        <MenuFuncionario/>
        <div className="table-responsive"> 
        <table className="table table-bordered table-striped table-hover"> 
          <thead className="table-sucess"> 
            <tr> 
              <th>Nome</th> 
              <th>Preço</th> 
              <th>Descrição</th>    
              <th>Ações</th> {/* Nova coluna de Ações */} 
            </tr> 
          </thead> 
          <tbody> 
            {produtos.map((produto)=> (
                <tr key={produto.id}> 
                <td style={{ fontSize: "13px" }}></td> 
                <td style={{ fontSize: "13px" }}> 
                    {
                        new Intl.NumberFormat("pt-br",{
                            style:"currency",
                            currency: "BRL",

                    }).format(produto.precoVenda)
                    }
            
                </td> 
                <td style={{ fontSize: "13px" }}></td> 
                <td className="text-center fs-6" style={{ width: "100px" }}> 
                  {/* Botão de Editar */} 
                  <button 
                    className="btn btn-sm btn-primary me-2"> 
                    <i className="fas fa-pencil-alt"></i>{" "} 
                    {/* Ícone de editar */} 
                  </button> 
 
                  {/* Botão de Excluir */} 
                  <button 
                    className="btn btn-sm btn-danger"> 
                    <i className="fas fa-trash-alt"></i>{" "} 
                    {/* Ícone de excluir */} 
                  </button> 
                </td> 
              </tr>
            ))}
               
             
          </tbody> 
        </table> 
      </div>
      <div className="text-end mt-3">
        <Link
        to="/produtos/novo"
        className={`btn btn-sucess`}
        >
            <i className="fas fa-plus"></i> 
            NovoProduto
        </Link>
      </div>
    </div>
 )
}

export default ListarProduto