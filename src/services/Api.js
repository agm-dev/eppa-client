import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://brainl.es/eppa/api`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
