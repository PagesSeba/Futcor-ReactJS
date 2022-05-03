import Box from '@mui/material/Box';
import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import "./Form.css"

const ariaLabel = { 'aria-label': 'description' };

export default function form() {
    return(
        <Box
      component="form"
      sx={{'& > :not(style)': { m: 1 },}}
      noValidate
      autoComplete="off"
    >
        <div>
            <Input required className='formInput' placeholder='Nombre y Apellido' inputProps={ariaLabel} />
            <Input required className='formInput' placeholder="Email" inputProps={ariaLabel} />
        </div>
        <div>
            <TextField required
            aria-label="maximun height"
            minRows={3}
            placeholder="Comentenos la razon de su contacto con nosotros aqui:"
            style={{ width: 430}}
            />
        </div>
        <div className='formTerms'>
            <h5>Acepto los términos y condiciones de FutCor:</h5>
            <Checkbox required />
        </div>
        <div className='formBtn'>
            <Button sx={{ mr: 2 }}  variant="contained" color="error">Borrar</Button>
            <Button sx={{ mr: 2 }}  variant="contained" color="success" type='submit'>Enviar</Button>
        </div>
    </Box>
  );
}