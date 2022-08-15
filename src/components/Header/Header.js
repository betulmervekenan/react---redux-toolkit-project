import React from 'react'
import './header.scss'
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useDispatch } from 'react-redux';
import { setCartOpen } from '../../features/cartSlice';

function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCartOpen(true))
  }

  return (
    <div className='Header'>
      <div className='Header-title'>SHOPPING ONLINE</div>
      <div className='Header-logo'>
        <ShoppingBasketTwoToneIcon />
      </div>
      <div>
        <div className='Header-basket--icon' onClick={handleClick}>
          <div className='Header-basket--subtitle'>MY CART</div>
          <AddShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Header