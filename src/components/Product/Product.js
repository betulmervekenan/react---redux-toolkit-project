import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './product.scss'
import { setModalOpen, setSelectedItemId } from '../../features/appSlice'

function Product({data}) {
  const { id, title, category, rating, description, price, image } = data;
  const { modalOpen, selectedItemId } = useSelector(state => state.app)
  const dispatch = useDispatch();

  const handleItemClick = (id) => {
    dispatch(setModalOpen(true))
    dispatch(setSelectedItemId(id))
  }

  return (
    <div className='product-item' onClick={() => handleItemClick(id)}>
      <div className='product-item--container'>
        <img src={image} className='product-item--image'></img>
      </div>
      <div className='product-item--category'>{category}</div>
      <div className='product-item--title'>{title}</div>
      <div className='product-item--rate'>RATE: {rating.rate}</div>
    </div>
  )
}

export default Product