import Api from 'views/public/utils/api'

export default {
  navList() {
    return new Promise((resolve, reject) => {
      Api.get('/api/common', {}).then(data => {
        resolve(data.navList)
      })
    })
  },
  siteName() {
    return new Promise((resolve, reject) => {
      Api.get('/api/common', {}).then(data => {
        resolve(data.siteName)
      })
    })
  }
}
