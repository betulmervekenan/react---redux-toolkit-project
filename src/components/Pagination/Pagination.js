import React from 'react'
import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.scss'

function Pagination() {

  const handleChange = () => {}

  return (
    <Stack className='Pagination' spacing={2}>
      <MUIPagination count={10} onChange={handleChange} />
    </Stack>
  )
}

export default Pagination