import React, { useEffect, useRef, useState } from 'react'
import './UserMinCard.css'

const UserMinCard = ({ user, onCardClick, userSelected }) => {
  const [isSelected, setIsSelected] = useState(false)
  const getAge = () => {
    const fechaNacimiento = user.birthdate.slice(0, 10)
    const yearBorn = fechaNacimiento.slice(0, 4)
    const fecha = new Date();
    return fecha.getUTCFullYear() - yearBorn
  }

  useEffect(() => {
    if (userSelected) {
      if (userSelected._id == user._id) {
        setIsSelected(true)
      }
      if (userSelected._id !== user._id) {
        setIsSelected(false)
      }
    }
  })



  return (
    <div
      className={`card-min-user ${isSelected ? 'selected' : ''}`}
      onClick={() => onCardClick(user)}
    >
      <img className='user_perfil_img' src={user.imgUrl} alt="" />
      {user.isSpecialUser ?
        <img className='star_user' src="https://images.vexels.com/media/users/3/134131/isolated/preview/b87002ac73e796d6e3460a6f27247cfb-caricatura-estrella-11.png?w=360" alt="" />
        : null}
      <div className="text_user">
        <p> {user.firstName} {user.lastName} </p>
        <p><samp>años: </samp> {getAge()} </p>
        <p><samp>email: </samp> {user.email} </p>
      </div>
      {/* falta products */}
    </div>
  )
}

export default UserMinCard