import React, { useState } from 'react'
import './FormPage.css'
import { postUser } from '../../services/PostUser';

const FormPage = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    isSpecialUser: false,
    email: '',
    imgUrl: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form_container">
        <div className="form-group">
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthdate">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isSpecialUser">Usuario Especial:</label>
          <input
            type="checkbox"
            id="isSpecialUser"
            name="isSpecialUser"
            checked={formData.isSpecialUser}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imgUrl">URL de la Imagen:</label>
          <input
            type="url"
            id="imgUrl"
            name="imgUrl"
            value={formData.imgUrl}
            defaultValue={'https://this-person-does-not-exist.com/img/avatar-gen370480c24b85cd4efb553f0a452c88f2.jpg'}
            placeholder='https://this-person-does-not-exist.com/img/ava...'
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </div>
    </form>
  )
}

export default FormPage