import Box from '@mui/material/Box';
import React, {useState} from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { TextField, CircularProgress, Modal } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom"
import db from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import "./Form.css"

const ariaLabel = { 'aria-label': 'description' };

export default function Form() {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const [fecha] = useState (() => {
        var fechaDelDia = new Date()
        var today = fechaDelDia.getDate() + '/' + (fechaDelDia.getMonth() + 1) + '/' + fechaDelDia.getFullYear();
        return today
    })
    const [formData, setFormData] = useState(
        {

            name: "",
            email: "",
            reason: "",


        }
    )
    const [order, setOrder] = useState(
        {
            contact: formData,
            date: fecha,
        }

    )

    const [orderLista, setOrderLista] = useState()
    const [loading, setLoading] = useState(true)


    const sendOrder = async () => {
        const docRef = await addDoc(collection(db, "contacto"), { ...order, contact: formData });
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
            contact: formData
        })
        sendOrder()

        setLoading(false)

    }
    const handleClose = () => {

        navigate("/")


    }


    return(
        <Box
      component="form"
      sx={{'& > :not(style)': { m: 1 },}}
      noValidate
      autoComplete="off"
    >
        <form  onSubmit={formSubmit}>
            <div>
                <TextField required className='formInput' placeholder='Nombre y Apellido' inputProps={ariaLabel}  onChange={infoComprador} value={formData.name} />
                <TextField required className='formInput' placeholder="Email" inputProps={ariaLabel} onChange={infoComprador} value={formData.email} />
            </div>
            <div>
                <TextField required
                aria-label="maximun height"
                minRows={3}
                placeholder="Comentenos la razon de su contacto con nosotros aqui:"
                style={{ width: 450}}
                sx={{ mt: 2 }}
                onChange={infoComprador}
                value={formData.reason}
                />
            </div>
            <div className='formTerms'>
                <h5>Acepto los términos y condiciones de FutCor:</h5>
                <Checkbox required />
            </div>
            <div className='formBtn'>
                <Button sx={{ mr: 2 }}  variant="contained" color="error" type="reset">Borrar</Button>
                <Button sx={{ mr: 2 }}  variant="contained" color="success"  onClick={addOrder}>Enviar</Button>
            </div>
        </form>
        <Modal onClose={() => setOpenModal(false)} open={openModal}>

            {   (
                    !orderLista ? (
                        <Box className="loading" sx={{ display: 'flex' }}>
                            <CircularProgress  color="success"/>
                        </Box>
                    ) : (
                        <div className="formCompraLista">
                            <h3> Todo Listo! se ha contactado con nosotros, en 48 hs hábiles recibirá una respuesta a su email.</h3>
                            <p>Su numero de órden es: <span className="orderCode">{orderLista}</span></p>
                            <Button onClick={handleClose} variant="contained" color="error">Cerrar</Button>
                        </div>)


                )
            }
            </Modal>
    </Box>
  );
}