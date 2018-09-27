import Api from 'views/public/utils/api'

export default {
  renderData() {
    return new Promise((resolve, reject) => {
      Api.get('/api/index', {}).then(data => {
        resolve(data.fezdesc)
      })
    })
  }
}
