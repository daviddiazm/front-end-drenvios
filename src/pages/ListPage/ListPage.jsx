import React, { useEffect, useState } from 'react'
import './ListPage.css'
import UserMinCard from '../../components/user-min-card/userMinCard'
import ProductMinCard from '../../components/product-min-card/ProductMinCard'
import { getAllUsers } from '../../services/GetAllUsers'
import { getAllProducts } from '../../services/GetAllProducts'

const ListPage = () => {
  const [users, setusers] = useState([])
  const [prodcuts, setProdcuts] = useState([])
  const [userSelected, setUserSelected] = useState()

  const getUsers = async () => {
    const result = await getAllUsers()
    setusers(result)
  }

  const getProdcuts = async () => {
    const result = await getAllProducts()
    setProdcuts(result)
  }

  const handleUserCard = (user) => {
    setUserSelected(user)
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
          {prodcuts.map(product => {
            return <ProductMinCard 
                    product={product} 
                    key={product._id} 
                    userSelected={userSelected} 
                    porductId = { product._id } />
          })}
        </section>
      </section>
  )
}

export default ListPage