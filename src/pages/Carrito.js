import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Divider, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom"
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";

const Carrito = () => {
    const { cartProducts, deleteProducts, totalPrice } = useContext(CartContext)

    return (
        <>
            <h1>Carrito</h1>
            {
                cartProducts.length ? (

                    <div>
                    {cartProducts.map((product) => {
                        return (
                        <Container>
                            <div className="Carro"><img className="imgCarro" src={product.img} />
                                <p className="precios">Camiseta: {product.equipo} {product.categoria}</p>
                                <p className="precios">Precio: ${product.precio}</p>
                                <p className="precios">Cantidad: {product.cantidad}</p>
                                <IconButton >
                                    <DeleteIcon onClick={() => deleteProducts(product)} color="error"/>
                                </IconButton>
                                <Divider />
                            </div>
                        </Container>)

                    })}

                    <Container className="pTotal">
                        <h4>Total: ${totalPrice()}</h4>
                        <Button color="success" variant="contained">Finalizar Compra</Button>
                    </Container>

                    </div>

                ) : (
                    <div className="cartVacio">
                        <p> No hay camisetas en el carrito.</p>
                        <Link to={"/"} className="linkNV" ><Button color="warning">Camisetas</Button></Link>
                    </div>
                )


            }




        </>
    )


}

export default Carrito