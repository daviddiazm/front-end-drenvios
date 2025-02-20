import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllUsers } from './services/GetAllUsers';
import UserMinCard from './components/user-min-card/userMinCard';
import { getAllProducts } from './services/GetAllProducts';
import ProductMinCard from './components/product-min-card/ProductMinCard';


function App() {
  const [count, setCount] = useState(0)
  const [users, setusers] = useState([])
  const [prodcuts, setProdcuts] = useState([])

  const getUsers = async () => {
    const result = await getAllUsers()
    setusers(result)
  }

  const getProdcuts = async () => {
    const result = await getAllProducts()
    setProdcuts(result)
  }


  useEffect(() => {
    getUsers()
    getProdcuts()
  }, [])


  return (
    <>
    <section className='presentacion'>
      <img src="https://cdn.drenvio.com/logo/drenvio.svg" alt="" srcset="" />
      <h4>Este es el front end de mi prueba tecnica</h4>
      <p>Att: <a href="https://www.linkedin.com/in/david-diaz-a845ab25a/">David Diaz Montengro</a> </p>
    </section>

      {/* <pre>{JSON.stringify(prodcuts, null, 2)}</pre> */}

      <section className='list'>
        <section className='users_list'>
          {users.map(user => {
            return <UserMinCard user={user} key={user._id} />
          })}
        </section>

        <section className='product_list'>
          {prodcuts.map(product => {
            return <ProductMinCard product={product} key={product._id} />
          })}
        </section>
      </section>

        <img  className='img_hero' src="https://cdn.drenvio.com/co/hero/cotizador.webp" width="600" height="380" alt="Envios nacionales e internacionales con DrEnvio" data-astro-cid-36xqwagk=""></img>

    </>
  )
}

export default App
