import axios from "axios"

export const postUser = async (data) => {
  const url = `${import.meta.env.VITE_URL_API}/api/usuarios`
  try {
    const res = await axios.post(url, data)
    return res
  } catch (error) {
    console.log(error);
    
  }
}