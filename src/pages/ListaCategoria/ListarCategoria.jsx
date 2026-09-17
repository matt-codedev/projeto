import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../components/CredentialUser"

const ListarCategoria = () => {
    return (
        <div className="container">
            <MenuFuncionario/>
            <CredentialUser title="Lista de categorias"/>
            <p>Listar categorias</p>
        </div>
    )
}
export default ListarCategoria