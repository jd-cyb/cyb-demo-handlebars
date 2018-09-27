import Api from 'views/public/utils/api'

export default {
  renderData(id = "") {
    return new Promise((resolve, reject) => {
      Api.post('/api/frames', { id: id }).then(data => {
        resolve(data)
      })

    })
  },
  detail(id = "") {
    return new Promise((resolve, reject) => {
      Api.post('/api/detail', { id: id }).then(data => {
        resolve(data)
      })
    })
  }
}
