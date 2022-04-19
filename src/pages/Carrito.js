import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Divider, Button, Modal } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from "react-router-dom"
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShopIcon from '@mui/icons-material/Shop';
import db from "../firebase"
import { collection, addDoc } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Carrito = () => {
    const navigate = useNavigate()
    const { cartProducts, deleteProducts, totalPrice, clearCart } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [fecha] = useState (() => {
        var fechaDelDia = new Date()
        var today = fechaDelDia.getDate() + '/' + (fechaDelDia.getMonth() + 1) + '/' + fechaDelDia.getFullYear();
        return today
    })
    const [formData, setFormData] = useState(
        {

            name: "",
            phone: "",
            email: "",

        }
    )
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((product) => {
                return {
                    equipo: product.equipo,
                    categoria: product.categoria,
                    precio: product.precio,
                    cantidad: product.cantidad,
                    id: product.id,
                }
            }),
            date: fecha,
            total: totalPrice()
        }

    )

    const [orderLista, setOrderLista] = useState()
    const [loading, setLoading] = useState(true)


    const sendOrder = async () => {
        const docRef = await addDoc(collection(db, "ordenes"), { ...order, buyer: formData });
        console.log("orden enviada :", docRef.id)
        setOrderLista(docRef.id)

    }

    const addOrder = () => {
        setOpenModal(true)
    }

    const infoComprador = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const formSubmit = (e) => {

        e.preventDefault()
        setOrder({
            ...order,
            buyer: formData
        })
        sendOrder()

        setLoading(false)

    }
    const handleClose = () => {

        navigate("/")
        clearCart([])

    }

    return (
        <>
            <h1>Carrito</h1>
            {
                cartProducts.length ? (

                    <div>
                    {cartProducts.map((product) => {
                        return (
                        <Container>
                            <div className="Carro"><img className="imgCarro" src={`/assets/images/${product.img}`} />
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
                        <div className="btnCartWidget">
                        <Button variant="contained" color="error" endIcon={<DeleteForeverIcon />} onClick={() => clearCart()}>Descartar Compra</Button>
                        <Button color="success" variant="contained" endIcon={<ShopIcon/>} onClick={addOrder}>Finalizar Compra</Button>
                        </div>
                    </Container>

                    </div>

                ) : (
                    <div className="cartVacio">
                        <p> No hay camisetas en el carrito.</p>
                        <Link to={"/"} className="linkNV" ><Button color="warning">Camisetas</Button></Link>
                    </div>
                )

                
            }

            <Modal onClose={() => setOpenModal(false)} open={openModal}>

            {
                loading ? (
                    <div className="formCompra">
                        <h2>Finalizar Compra</h2>
                        <form className="formInt" onSubmit={formSubmit}>
                            <input type="text" name="name" placeholder="Introduzca Nombre Completo" onChange={infoComprador} value={formData.name} required />
                            <input type="number" name="phone" placeholder="Introduzca Número de Telefono" onChange={infoComprador} value={formData.phone} required />
                            <input type="mail" name="email" placeholder="Introduzca Correo Electrónico" onChange={infoComprador} value={formData.email} required />
                            <Button type="submit" variant="contained" color="warning" className="btnForm">Enviar</Button>
                        </form>

                    </div>

                ) : (
                    !orderLista ? (
                        <Box className="loading" sx={{ display: 'flex' }}>
                            <CircularProgress  color="success"/>
                        </Box>
                    ) : (
                        <div className="formCompraLista">
                            <h3> Muchas gracias por su compra! Su orden se ha generado exitosamente</h3>
                            <p>Su numero de órden es: <span className="orderId">{orderLista}</span></p>
                            <Button onClick={handleClose} variant="contained" color="error">Cerrar</Button>
                        </div>)


                )
            }
            </Modal>
            {console.log("orden de compra:", order)}

        </>
    )


}

export default Carrito