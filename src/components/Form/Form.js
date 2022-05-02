import Box from '@mui/material/Box';
import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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
            <Input className='formInput' placeholder='Nombre y Apellido' inputProps={ariaLabel} />
            <Input className='formInput' placeholder="Email" inputProps={ariaLabel} />
        </div>
        <div>
            <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Comentenos la razon de su contacto con nosotros aqui:"
            style={{ width: 420 }}
            />
        </div>
        <div className='formTerms'>
            <h5>Acepto los términos y condiciones de FutCor:</h5>
            <Checkbox />
        </div>
        <div className='formBtn'>
            <Button sx={{ mr: 2 }}  variant="contained" color="error">Borrar</Button>
            <Button sx={{ mr: 2 }}  variant="contained" color="success">Enviar</Button>
        </div>
    </Box>
  );
}