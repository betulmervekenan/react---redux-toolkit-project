import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../../features/cartSlice';
import Typography from '@mui/material/Typography';
import './cart.scss';
import { PriceChange } from '@mui/icons-material';
import { priceFormat } from '../../utils';

export default function Cart() {
  const dispatch = useDispatch();
  const { cartOpen, cart } = useSelector((state) => state.cart)
  const { data } = useSelector((state) => state.list)

  const handleClose = () => {
    dispatch(setCartOpen(false))
  }

  const list = Object.keys(cart).map(key => {
    const product = data.find((product) => {
      return key == product.id;
    })
    
    return {
      ...product,
      quantity: cart[key],
      total: cart[key] * product.price,
    }
  })

  return (
    <Drawer
      anchor='right'
      open={cartOpen}
      onClose={handleClose}
      className='Cart'
    >
      <div className='Cart-content'>
        <Typography variant="h6" gutterBottom component="div">
          MY CART
        </Typography>
        {list.map((item) => (
         <div className='Cart-detail' key={item.id}>
          <div className='Cart-image'>            
            <img src={item.image}></img>
          </div>
          <div className='Cart-title'>
            <Typography variant="subtitle2" gutterBottom component="div">
              {item.title}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Quantity: {item.quantity}
            </Typography>
          </div>
            <Typography variant="subtitle2" gutterBottom component="div">
              Price: {priceFormat(item.price)}
            </Typography>
          </div>
        ))}
      </div>
    </Drawer>
  );
}