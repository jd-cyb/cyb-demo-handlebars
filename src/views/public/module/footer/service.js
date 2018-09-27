import Api from 'views/public/utils/api'

export default {
  footerText() {
    return new Promise((resolve, reject) => {
      Api.get('/api/common', {}).then(data => {
        resolve(data.footerText)
      })
    })
  }
}
