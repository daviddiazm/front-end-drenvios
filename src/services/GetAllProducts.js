import axios from "axios"

export const getAllProducts = async () => {
  const url = `${import.meta.env.VITE_URL_API}/api/productos`
  try {
    const res = await axios.get(`${url}`)
    return res.data
  } catch (error) {
    console.log(error);
  }
}