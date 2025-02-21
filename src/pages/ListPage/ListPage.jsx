import React, { useEffect, useState } from 'react'
import './ListPage.css'
import UserMinCard from '../../components/user-min-card/userMinCard'
import ProductMinCard from '../../components/product-min-card/ProductMinCard'
import { getAllUsers } from '../../services/GetAllUsers'
import { getAllProducts } from '../../services/GetAllProducts'
import { Autocomplete, createFilterOptions, TextField } from '@mui/material'

const tags = [
  "deporte",
  "ropa",
  "entrenamiento",
  "audio",
  "inalámbrico",
  "tecnología",
  "sostenible",
  "reutilizable",
  "hogar",
  "oficina",
  "iluminación",
  "LED",
  "escolar",
  "accesorios",
  "mochila",
  "tecnologia",
  "gaming",
  "estudio"
]

const ListPage = () => {
  const [users, setusers] = useState([])
  const [prodcuts, setProdcuts] = useState([])
  const [productsFiltered, setProductsFiltered] = useState([])
  const [userSelected, setUserSelected] = useState()
  const [value, setValue] = React.useState('');

  const getUsers = async () => {
    const result = await getAllUsers()
    setusers(result)
  }
  const getProdcuts = async () => {
    const result = await getAllProducts()
    setProdcuts(result)
    setProductsFiltered(result)
  }
  const handleUserCard = (user) => {
    setUserSelected(user)
  }


  const handlerFilter = (evetn) => {
    setValue(evetn.target.value)
    const filteredProducts = prodcuts.filter((product) =>{
      return  (value ? product.name.toLowerCase().includes(value.toLowerCase()) : true)
    });
    setProductsFiltered(filteredProducts);
  }



  useEffect(() => {
    getUsers()
    getProdcuts()
  }, [])

  return (
    <section className='list'>
      <section className='users_list'>
        {users.map(user => {
          return <UserMinCard
            user={user}
            key={user._id}
            onCardClick={handleUserCard}
            userSelected={userSelected} />
        })}
      </section>

      <section className='product_list'>

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChangeCapture={handlerFilter}
          value={value}
        />

        {productsFiltered.map(product => {
          return <ProductMinCard
            product={product}
            key={product._id}
            userSelected={userSelected}
            porductId={product._id} />
        })}
      </section>
    </section>
  )
}

export default ListPage