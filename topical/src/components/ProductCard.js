import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import InputAdornment from '@material-ui/core/InputAdornment'

const ProductCard = props => {
  const { name, image, upc } = props
  return (
    <Link to={`/product/${upc}`} className='product'>
      <p key={upc}>
        <h1>{name}</h1>
        <h2>{upc}</h2>
        <img src={image} alt={name} />
      </p>
    </Link>
  )
}

export default ProductCard
