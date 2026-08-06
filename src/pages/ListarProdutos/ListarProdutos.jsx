import React, {useState, useEffect} from "react"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";   

const ListarProduto = () => {

const arrayProdutos = [
    {
        id: 1,
        nome: "Pizza calabresa",
        precoVenda:59.90,
        descricao: "Pizza com bastante cebola"
    }
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
            {arrayProdutos.map((produtos)=> (
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
    </div>
 )
}

export default ListarProduto