import React from 'react'
import './home-page.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../features/listSlice';
import Modal from './../../components/Modal/Modal'
import Pagination from '../../components/Pagination/Pagination'
import Product from '../../components/Product/Product';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/Cart/Cart'

function HomePage() {
  const { data } = useSelector(state => state.list)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={2}>
          {data.map(product => (
            <Grid key={product.id} item xs={4}>
              <Product data={product} />
            </Grid>
            )
          )}
        </Grid>
        <Modal />
      </Container>
      <Pagination />
      <Footer />
      <Cart />
    </div>
  )
}

export default HomePage