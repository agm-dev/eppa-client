import Api from '@/services/Api'

export default {
  getProducts (params) {
    return Api().get('/product/v1')
  },
  searchProducts (text) {
    const searchText = encodeURI(text)
    return Api().get(`/search/v1?text=${searchText}`)
  }
}
