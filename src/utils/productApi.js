
import axios from 'axios'


export const base_url = 'https://indimedo.onrender.com'
export const searchApi = async (query) =>{
const data =   await axios.get(`${base_url}${query}`);
//console.log(data[0].price,data[0].quantity,data[0].slug,'TITLE')

  return data
}
