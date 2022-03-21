import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return(
        <div>
            <Button variant="contained" color="primary">
                <ShoppingCartIcon  />
            </Button>
        </div>

    )
}



export default CartWidget