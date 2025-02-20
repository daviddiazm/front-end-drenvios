import axios from "axios";

export const getAllUsers = async () => {
  const url = `${import.meta.env.VITE_URL_API}/api/usuarios`
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    console.log(error);
  }
}
