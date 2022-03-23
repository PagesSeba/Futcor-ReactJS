import React, {useState} from "react"
import Button from '@mui/material/Button';

    function ItemCount({initial, stock, onAdd}) {

    const [contador , setCount] = useState(initial)


    const add = () => {
        if(contador < stock) { 
            setCount(contador + 1)
        }
    }
    const removeAdd = () => {
          if(contador > 1) {
            setCount(contador - 1)
        }
    }
    
    return(
        <div>
            <div className="contador">
                <Button onClick={removeAdd} color="error" className="btnContador">-</Button>
                <p>{contador}</p>
                <Button onClick={add} color="success" className="btnContador">+</Button>
            </div>
            <div>
                <Button onClick={() => onAdd(contador)} variant="contained" sx={{ mb: 3 }} >Comprar</Button>
            </div>
        </div>
    )

}





export default ItemCount