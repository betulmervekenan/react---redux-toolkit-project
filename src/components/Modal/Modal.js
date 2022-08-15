import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, setSelectedItemId } from '../../features/appSlice';
import { addToCart } from '../../features/cartSlice';
import { useSnackbar } from 'notistack';
import './modal.scss';

export default function Modal() {
  const dispatch = useDispatch();
  const { modalOpen, selectedItemId } = useSelector(state => state.app)
  const { data } = useSelector(state => state.list)
  const product = data.find((item) => {
    return item.id === selectedItemId
  })
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    dispatch(setModalOpen(false))
  };

  const handleClick = () => {
    dispatch(addToCart(product.id))
    enqueueSnackbar('Added to Cart!', { variant: 'success', anchorOrigin:{ vertical:'top', horizontal:'right' } });
  }

  if (!product) {
    return null;
  }

  return (
    <Dialog className='Modal'
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={modalOpen}
    >
      <DialogContent dividers>
      
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className='Modal--image-container'>
                <img className='Modal--image' src={product.image}></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='Modal--content'>
                <Typography className='Modal--title' variant="h5" gutterBottom>
                {product.title}
                </Typography>
                <Typography variant="body1"  gutterBottom>
                {product.description}
                </Typography>
                <Typography className='Modal--price' variant="h6" gutterBottom>
                Price: {product.price}
                </Typography>
                <Button variant="contained" onClick={handleClick}>Add to Cart</Button>
              </div>
            </Grid>
          </Grid>
      </DialogContent>
    </Dialog>
  );
}
